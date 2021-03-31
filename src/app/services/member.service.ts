import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore/public_api';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  async login(email: string, password: string): Promise<any> {
    return await this.auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        // メールアドレス確認が済んでいるかどうか
        if (!auth.user.emailVerified) {
          this.auth.signOut();
          return Promise.reject('メールアドレスが確認できていません。');
        }
      })
      .catch(err => {
        return Promise.reject('ログインに失敗しました。\n' + err);
      });
  }

  async signup(email: string, password: string, displayName: string): Promise<any> {
    const credential = await this.auth
      .createUserWithEmailAndPassword(email, password); // アカウント作成

    return await Promise.all([
      this.createMember(credential.user.uid, credential.user.email, displayName),
      credential.user.sendEmailVerification()
    ])
      // メールアドレス確認
      .then(() =>
        Promise.resolve('メールアドレス確認メールを送信しました。')
      )
      .catch(err =>
        Promise.reject('アカウントの作成に失敗しました。\n' + err)
      );
  }

  createMember(uid, email, displayName): Promise<void> {
    const data: Member = {
      email: email,
      id: uid,
    };

    return this.db.collection('member').doc(uid).set(data);
  }

  sendPasswordResetEmail(email: string): Promise<any> {
    return this.auth.sendPasswordResetEmail(email)
      .then(res => {
        return Promise.resolve();
      }).catch((err) => {
        return Promise.reject(err);
      });
  }
}
