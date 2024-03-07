"use strict";

// console.log("Hello World from main.js!");

// 数値リテラル
// console.log(12345);

// 浮動小数点リテラル
// console.log(12345.6789);

// 文字列リテラル
// console.log("12345");

// // エスケープシーケンスを使おう
// console.log("I'm Toyonari Deushi.");
// console.log("¥ \t AAA \n BBB");

// // 補足
// console.log("I'm Toyonari Deushi.");
// console.log('こんにちは！"出牛"さん');

// console.log("Hellow! I'm Toyonari Deushi.");
// console.log("I'm 23\" years old.");

// 変数と定数を使い分けよう

// let color = "red";
// let color = "red";
// console.log(color);

// let color = "green";
// color = "green";
// console.log(color);

// let myColor = "yellow";
// let myColor = "blue";
// console.log(myColor);

// 変数
// var myName = "Toyonari Deushi";
// console.log(myName);

// 定数
// const PI = 3.14;
// console.log(PI);

// const TAX_RATE = 10;
// console.log(TAX_RATE);

// データ型について理解しよう
// let myName = "Toyonari Deushi";
// let num = 123;
// let dec = 123.456;

// console.log(myName);
// console.log(num);
// console.log(dec);

// console.log(typeof myName);
// console.log(typeof num);
// console.log(typeof dec);

// myName = 456;
// console.log(myName);
// console.log(typeof myName);

// 動的型付け言語
// 静的型付け言語

// 基本的な演算子を使おう
// let ans = 1 + 2;
// console.log(ans);

// let i = 20;
// let j = 10;
// let ans1 = i + j;
// console.log(ans1);

// let ans2 = i - j;
// console.log(ans2);

// let ans3 = i * j;
// console.log(ans3);

// let ans4 = i / j;
// console.log(ans4);

// let x = 3;
// let y = 2;
// let ans5 = x / y;
// console.log(ans5);

// let ans6 = x % y;
// console.log(ans6);

// let ans7 = Math.pow(x, y);
// console.log(ans7);

// let ans8 = x ** y;
// console.log(ans8);

// let ans9 = x * x;
// console.log(ans9);

// 演算子の優先順位を理解しよう
// let x = 1;
// let y = 2;
// let z = 3;

// let ans1 = x + y * z;
// console.log(ans1);

// let ans2 = (x + y) * z;
// console.log(ans2);

// 優先順位
// ()
// * /
// + -
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table

// // 文字列結合とテンプレートリテラルを使おう
// let lastName = "Deushi";
// let firstName = "Toyonari";
// let message1 = "こんにちは " + lastName + " " + firstName + " さん";
// console.log(message1);

// // バッククォートの入浴方法はShift + @
// let message2 = `こんにちは ${lastName} ${firstName} さん
// JavaScriptの学習を始めましょう`;
// console.log(message2);

// // 複合代入演算子を使おう
// let num = 20;
// num = num + 10;
// console.log(num);

// let num1 = 20;
// num1 += 10;
// console.log(num1);

// let num2 = 20;
// num2 -= 10;
// console.log(num2);

// let num3 = 20;
// num3 *= 10;
// console.log(num3);

// let num4 = 20;
// num4 /= 10;
// console.log(num4);

// ◼︎演習問題
// Aさんは、
// ・体重が60kg
// ・身長が1.7m
// BMIを計算して、consoleへ出力してください。

// 補足：
// BMI＝体重（kg）/（身長（m）*身長（m））
// BMI・・・肥満度を示す数値
// let weight = 60;
// let height = 1.65;
// let bmi = weight / (height * height);
// console.log(bmi);

// let weight = 60;
// let height = 1.7;
// let bmi = weight / (height * height);
// console.log(bmi);

// インクリメントとデクリメントについて知ろう
// // インクリメント
// num++;
// console.log(num);

// // デクリメント
// num--;
// console.log(num);

// //　前置演算子のインクリメント
// ++num;
// console.log(num);

// //　前置演算子のデクリメント
// --num;
// console.log(num);

// let num1 = 10;
// let num2 = 10;
// let ans1 = ++num1;
// let ans2 = num2++;
// console.log(ans1);
// console.log(ans2);

// 条件分岐を記述しょう if / else
// let temperature = 29;
// if (temperature > 28) {
//     console.log("冷房稼働！");
// }

// console.log(29 > 28);
// console.log(20 > 28);

// // 以上
// let a = 100;
// if (a >= 100) {
//     console.log("100以上です");
// }

// // より大きい
// let b = 101;
// if (b > 100) {
//     console.log("100より大きいです");
// }

// // 以下
// let c = 100;
// if (c <= 100) {
//     console.log("100以下です");
// }

// // 未満
// let d = 99;
// if (d < 100) {
//     console.log("100未満です");
// }

// // 等しい
// let e = 100;
// if (e == 100) {
//     console.log("100です");
// }

// // 等しくない
// let f = 111;
// if (f != 100) {
//     console.log("100ではありません");
// }

// if / else
// let g = 101;
// let g = 99;
// if (g >= 100) {
//     console.log("100以上です");
// } else {
//     console.log("100未満です");
// }

// より複雑な条件分岐を記述しよう else if
// if / else if / else
// 例題
// テストの点数xによって、
// 通知表の成績をコンソールに
// 出力するプログラムを書く

// 90点以上 A
// 80点以上 B
// 60点以上 C
// 60点未満 D

// let x = 100;
// if (x >= 90) {
//     console.log("A");
// } else if (x >= 80) {
//     console.log("B");
// } else if (x >= 60) {
//     console.log("C");
// } else {
//     console.log("D");
// }

// let x = 100;
// if (x >= 90) {
//   console.log("A");
// } else if (x >= 80) {
//   console.log("B");
// } else if (x >= 60) {
//   console.log("C");
// } else {
//   console.log("D");
// }

// 型変換をしよう
// let birthYear = "2000";
// let age = 18;
// console.log(birthYear + age);
// console.log(age + birthYear);
// console.log(Number(birthYear) + age);
// console.log(age + Number(birthYear));
// console.log(Number(birthYear) + Number(age));
// console.log(String(age) + birthYear);
// console.log(age + String(birthYear));
// console.log(String(age) + String(birthYear));

// boolean型を使おう
// let b = true;
// if (b) {
//     console.log("bはtrueです");
// } else {
//     console.log("bはfalseです");
// }

// console.log(!b);

// == と ===の違いを理解しよう
// let num = 100; //数値型
// let str = "100"; //文字列型

// if (num == str) {
//   console.log("同じです");
// } else {
//   console.log("違います");
// }

// if (num === str) {
//   console.log("同じです");
// } else {
//   console.log("違います");
// }

// 演習問題：条件分岐
// 演習問題
// Aさんの体重は60kg、身長は1.7mです。
// ①復習：AさんのBMIを求めて出力
// BMI＝体重（kg）/（身長（m）*身長（m））
// ②BMIの数値により「痩せ」「普通」「肥満」のいずれかを出力
// 25以上が肥満
// 18.5以上25未満が普通
// 18.5未満が痩せ

// let weight = 60;
// let height = 1.7;
// let bmi = weight / (height * height);
// if (bmi >= 25) {
//     console.log("肥満");
// } else if (bmi >= 18.5 && bmi < 25) {
//     console.log("普通");
// } else {
//     console.log("痩せ");
// }

// let weight = 60;
// let height = 1.7;
// let bmi = weight / (height * height);
// console.log(bmi);
// if (bmi >= 25) {
//   console.log("肥満");
// } else if (bmi >= 18.5) {
//   console.log("普通");
// } else {
//   console.log("痩せ");
// }

// let weight = 65;
// let height = 1.65;
// let bmi = weight / (height * height);
// console.log(bmi);
// if (bmi >= 25) {
//   console.log("肥満");
// } else if (bmi >= 18.5) {
//   console.log("普通");
// } else {
//   console.log("痩せ");
// }

// 論理演算子を使おう
// && 論理AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// || 論理OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// ! 論理NOT
// console.log(!true);
// console.log(!false);

// 論理演算子
// ! && || の優先順位
// console.log((false && true) || true);
// console.log(false && (true || true));

// 例題）運転免許証を持っていて、
// かつ、いわゆるゴールド免許の場合には、
// 「あなたは有料ドライバーです」と表示する。

// let hasDriversLicense = true;
// let hasGoldLicense = true;

// if (hasDriversLicense && hasGoldLicense) {
//   console.log("あなたは有料ドライバーです");
// }

// 条件分岐の入れ子を使おう
// 例題）2の倍数、かつ、3の倍数のときに、
// メッセージを表示する

// let num = 6;
// if (num % 2 === 0) {
//     if (num % 3 === 0) {
//         console.log(`${num}は2の倍数、かつ、3の倍数です`);
//     }
// }

// let remainder = 10 % 3;
// console.log(remainder);

// let num = 6;
// if (num % 2 === 0 && num % 3 === 0) {
//     console.log(`${num}は2の倍数、かつ、3の倍数です`);
// }

// 例題）入賞メッセージの出力
// 順位numによって、出力するメッセージを変えるプログラム
// 1 → 金賞
// 2 → 銀賞
// 3 → 銅賞
// 4 → 4位
// 5 → 5位
// それ以外の値 → 選外

// let num = 1;
// switch (num) {
//   case 1:
//     console.log("金賞");
//     break;
//   case 2:
//     console.log("銀賞");
//     break;
//   case 3:
//     console.log("銅賞");
//     break;
//   case 4:
//     console.log("4位");
//     break;
//   case 5:
//     console.log("5位");
//     break;
//   default:
//     console.log("選外");
//     break;
// }

// let num = 1;
// if (num === 1) {
//   console.log("金賞");
// } else if (num === 2) {
//   console.log("銀賞");
// } else if (num === 3) {
//   console.log("銅賞");
// } else if (num === 4) {
//   console.log("4位");
// } else if (num === 5) {
//   console.log("5位");
// } else {
//   console.log("選外");
// }

// ◼︎演習問題
// おみくじプログラムの作成
// switch文を使用。

// 変数numの値によってコンソールへの出力を変える。
// 1 → 大吉
// 2 → 中吉
// 3 → 小吉
// 4 → 吉
// 5 → 凶
// それ以外 → 想定外の数値です。

// let num = 1;
// Math.random() * (max - min + 1) + min
// let num = Math.floor(Math.random() * 5 + 1);
// console.log(num);
// switch (num) {
//   case 1:
//     console.log("大吉");
//     break;
//   case 2:
//     console.log("中吉");
//     break;
//   case 3:
//     console.log("小吉");
//     break;
//   case 4:
//     console.log("吉");
//     break;
//   case 5:
//     console.log("凶");
//     break;
//   default:
//     console.log("想定外の数値です");
//     break;
// }

// nullとundefinedについて理解しよう
// undefined
// 未定義。変数を宣言したが、値を代入していない状態。

// null
// 変数は定義されているが、該当する値が無い状態。

// undefined
// let x;
// console.log(x);

// // null
// let item = null;
// console.log(item);

// if (x === undefined) {
//   console.log("xはundefinedです");
// }

// if (item === null) {
//   console.log("itemはnullです");
// }

// 三項演算子を使おう
// 構文：三項演算子
// 条件式 ? trueの処理 : falseの処理

// 例題）
// 年齢が20歳以上の場合は、ビールと出力
// 年齢が20歳未満の場合は、コーラと出力

// let age = 20;
// let drink = (age >= 20) ? "ビール" : "コーラ";
// console.log(drink);

// let age = 20;
// let result;
// if (age >= 20) {
//     result = "ビール";
// } else {
//     result = "コーラ";
// }
// console.log(result);

// 関数とは何か理解しよう
// 「四角形の面積を計算する関数の作成」
// ・四角形の縦の長さと、横の長さを引数に渡すと、四角形
// の面積（縦x横）を計算して、値っを返す関数をつくり、
// ・作った関数を使って、高さ3m、横幅5mの四角形の面積
// を求め、コンソールに出力する。
// 単位は㎡とする。単位は出力しなくて良い。
// →4種類の方法で関数を定義する練習をします。

// function命令を使おう
// 例題：四角形の面積を求める関数
// function getRectangle(height, width) {
//     // 引数
//     return height * width; // 戻り値
// }

// console.log(getRectangle(3, 5));

// // 自作のBMI関数
// let getBmi = document.getElementById("getBmi");
// getBmi.addEventListener("click", function () {
//     let getWeight = parseFloat(document.getElementById("weight").value);
//     let getHeight = parseFloat(document.getElementById("height").value);
//     if (getWeight === "" || getHeight === "") {
//         document.getElementById("result").textContent = "値を入力してください";
//     } else {
//         // 身長がセンチメートルで入力されている場合、メートルに変換する
//         if (getHeight > 3) {
//             getHeight /= 100; // センチメートルをメートルに変換
//         }
//         let bmi = Number(getWeight) / (Number(getHeight) * Number(getHeight));
//         if (bmi >= 25) {
//             document.getElementById("result").textContent = "肥満";
//             console.log(bmi);
//         } else if (bmi >= 18.5) {
//             document.getElementById("result").textContent = "普通";
//             console.log(bmi);
//         } else {
//             document.getElementById("result").textContent = "痩せ";
//             console.log(bmi);
//         }
//     }
// });

// 関数リテラルを使おう
// const getRectangle = function (height, width) {
//   return height * width;
// }

// console.log(getRectangle(3, 5));

// Functionコンストラクターを使おう
// 例題：四角形の面積を求める関数
// const getRectangle = new Function ('height', 'width', 'return height * width');

// console.log(getRectangle(3, 5));

// アロー関数を使おう
// 例題：四角形の面積を求める関数
// const getRectangle = function (height, width) {
//   return height * width;
// }
// console.log(getRectangle(3, 5));

// const getRectangle = (height, width) => {
//   return height * width;
// }
// console.log(getRectangle(3, 5));

// 演習問題
// 演習問題「みかんの合計金額を計算するプログラム」
// Aさんが1個100円のみかんを、20個買いました。
// みかんの単価と値段を引数に渡すと、
// 合計金額を計算して返す関数を作成。
// 作成した関数を呼び出して、
// Aさんの支払い合計金額はいくらになるか計算して、
// コンソールに出力する。
// ※消費税は考慮しないものとする。
// 回答例では、function 命令で定義する方法で、実装。

// function getBuy(price, count) {
//     return price * count;
// }
// console.log(getBuy(100, 20));

// const getBuy = (price, count) => {
//   return price * count;
// }
// console.log(getBuy(100, 20));

// const getOrange = (price, count) => {
//   return price * count;
// }
// console.log(getOrange(100, 20));

// const getOrange = (price, count) => {
//   return price * count;
// };

// console.log(getOrange(100, 20));

// コールバック関数を使おう
// 例1）タイマー処理
// 3秒経過したら、
// コンソールに「Timeout!」と表示する。

// const displayMessage = function () {
//     console.log("Timeout!");
// };

// setTimeout(displayMessage, 3000);

// const displayMessege = function () {
//   console.log("Timeout!");
// }

// setTimeout(displayMessege, 3000);

// 例2）
// お名前の入力が完了したら、
// 「Hello! ◯◯-san.」と
// コンソールに表示する。

// コールバック関数
// function greeting(name) {
//   console.log('Hello! ' + name + '-san.');
// }

// function inputUserName(callback) {
//   let name = prompt('お名前を入力してください');
//   callback(name);
// }

// function greeting(name) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = "Hello! " + name + "さん";
//     document.body.appendChild(paragraph);
// }

// function inputUserName(callback) {
//     let name = document.getElementById("name").value;
//     callback(name);
// }

// // HTMLからbutton要素を取得
// let button = document.getElementById("button");

// // button要素にクリックイベントを追加
// button.addEventListener("click", function () {
//     inputUserName(greeting);
// });

// inputUserName(greeting);

// 配列について理解しよう
// 宣言、初期化
// let colors = ['Red', 'Green', 'Blue'];
// console.log(colors);
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]); // undefined

// // データ型
// let arr = [1, "2", 3, ["a", "b", "c"]];
// console.log(arr[3][1]);

// // 個数
// console.log(colors.length);

// // 末尾の値を取得
// console.log(colors[colors.length - 1]);

// // 空の配列
// let emptyArr = [];
// console.log(emptyArr);

// // 配列を操作しよう
// const colors = ['Red', 'Green', 'Blue'];
// console.log(colors);

// // 末尾に追加
// colors.push('Black');
// console.log(colors);

// // 先頭に追加
// colors.unshift('White');
// console.log(colors);

// // 更新
// colors[1] = 'Aka';
// console.log(colors);

// // 指定した位置に1つ以上の値を挿入
// let insertArr = ['a', 'b', 'c'];
// insertArr.splice(1, 0, 'D');
// console.log(insertArr);

// // 複数挿入
// insertArr.splice(2, 0, 'X', 'Y', 'Z');
// console.log(insertArr);

// // 指定した位置から削除
// insertArr.splice(2, 2);
// console.log(insertArr);

// // 結合
// let arr1 = ["a", "b", "c"];
// let arr2 = ["d", "e", "f"];
// let arr3 = ["g", "h", "i"];
// let arr4 = ["j", "k", "l"];
// let mergedArr = arr1.concat(arr2).concat(arr3).concat(arr4);
// console.log(mergedArr);
// console.log(arr1);
// console.log(arr2);
// mergedArr = mergedArr.filter(function (element) {
//     return element !== ",";
// });
// let paragraph = document.createElement("p");
// paragraph.textContent = mergedArr;
// paragraph.textContent = mergedArr.join("");
// document.body.appendChild(paragraph);

// // 先頭を削除
// let arr3 = ['a', 'b', 'c', 'd'];
// arr3.shift();
// console.log(arr3);

// // 末尾を削除
// arr3.pop();
// console.log(arr3);

// オブジェクトを使おう
// 例題：ユーザーオブジェクトの操作
// 変数userを用意
// 下記のオブジェクトを作成
// name: Taro Yamada
// gender: man
// birthYear: 1990
// 各値を、プロパティ（キー）を指定して、
// 取り出してコンソールに表示
// let user = new Object();
// user.name = 'Taro Yamada';
// user.gender = 'man';
// user.birthYear = 1990;
// console.log(user);

// // オブジェクト初期化子
// let user = { name: "TaroYamada", gender: "man", birthYear: 1990 };
// console.log(user);

// // ドット記法
// console.log(user.name);
// console.log(user.gender);
// console.log(user.birthYear);

// // ブラケット記法
// console.log(user["name"]);
// console.log(user["gender"]);
// console.log(user["birthYear"]);

// // 個数
// console.log(Object.keys(user).length);

// // プロパティ（key）を取得
// let keys = Object.keys(user);
// console.log(keys);

// // user.prefecture = 'Tokyo';
// // console.log(user);
// user["prefecture"] = "Tokyo";
// console.log(user);

// user.hobby = "サバゲー";
// console.log(user.hobby);

// // 値の書き換え
// // user.prefecture = 'Osaka';
// user["prefecture"] = "Osaka";
// console.log(user);

// // 結合
// let obj1 = { a: 1, b: 2, c: 3 };
// let obj2 = { d: 4, e: 5, f: 6 };
// let mergedObj = Object.assign(obj1, obj2);
// console.log(mergedObj);

// // 空のオブジェクト
// let person = {};
// console.log(person);

// let user = new Object();
// user.name = "Toyonari Deusshi";
// user.age = 40;
// user.gender = "man";
// console.log(user);
// console.log(Object.keys(user).length);
// let dlElement = document.createElement("dl");
// document.body.appendChild(dlElement);
// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
//     let dtElement = document.createElement("dt");
//     dtElement.textContent = key;
//     dlElement.appendChild(dtElement);
//     let ddElement = document.createElement("dd");
//     ddElement.textContent = user[key];
//     dlElement.appendChild(ddElement);
// }

// オブジェクトメソッドを使おう
// 例題：オブジェクトuserに、
// 生まれた年から年齢を計算する
// メソッドを追加

// let user = {
//     name: "Toyonari Deushi",
//     gender: "man",
//     birthYear: 1983,
//     calcAge: function () {
//         let currentDate = new Date();
//         let currentYear = currentDate.getFullYear();
//         console.log(this.birthYear); // デバッグ用
//         return currentYear - this.birthYear;
//     },
// };
// let age = user.calcAge();
// let dlElement = document.createElement("dl");
// for (let key in user) {
//     let dtElement = document.createElement("dt");
//     dtElement.textContent = key;
//     dlElement.appendChild(dtElement);
//     let ddElement = document.createElement("dd");
//     if (key === "calcAge") {
//         ddElement.textContent = age;
//     } else {
//         ddElement.textContent = user[key];
//     }
//     dlElement.appendChild(ddElement);
// }
// document.body.appendChild(dlElement);

// 繰り返し処理forを使おう
// 例題1）繰り返し処理forを使って、
// コンソールに1から3まで順に表示。
// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }

// 例題2）入れいつ['a', 'b', 'c']の値を、
// for文を利用して、
// 1つずつコンソールに出力。
// let arr = ["a", "b", "c"];
// // for (let i = 0; i < 3; i++) {
// //   console.log(arr[i]);
// // }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// ループの入れ子を使おう
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(`i; ${i}, j: ${j}`);
//   }
// }

// 例題）2次元配列に格納されている、
// テストの点数を全て、取り出して表示する
// const scores = [
//     [100, 99, 98],
//     [90, 89, 88],
//     [80, 79, 78],
// ];

// console.log(scores[0][0]);
// console.log(scores[0][1]);
// console.log(scores[0][2]);
// console.log(scores[1][0]);
// console.log(scores[1][1]);
// console.log(scores[1][2]);
// console.log(scores[2][0]);
// console.log(scores[2][1]);
// console.log(scores[2][2]);

// for (let i = 0; i < scores.length; i++) {
//     for (let j = 0; j < scores[i].length; j++) {
//         console.log(scores[i][j]);
//     }
// }

// for (let i = 0; i < scores.length; i++) {
//   for (let j = 0; j < scores[i].length; j++) {
//     console.log(scores[i][j]);
//   }
// }

// 繰り返し処理whileを使おう
// 例題1）while文を使って、
// コンソールに1から3まで順に表示。
// let i = 1;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// 例題2）whileループの途中で
// while文を抜ける。
// （jが5になったら、while文を抜ける）
// let j = 1;
// while (j <= 10) {
//   console.log(j);
//   if (j === 5) {
//     break;
//   }
//   j++;
// }

// 繰り返し処理do whileを使おう
// 例題：do while文を使って、
// コンソールに1〜3まで出力する
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 3);

// 繰り返し処理
// forEachを使おう

// 例題）配列から、一つずつ、
// 要素を取り出して、コンソールに出力する
// let colors = ["Red", "Green", "Blue"];
// // for (let i = 0; i < colors.length; i++) {
// //   console.log(colors[i]);
// // }

// colors.forEach(function (color) {
//   console.log(color);
// });

// 繰り返し処理for・・・ofを使おう
// const colors = ["Red", "Green", "Blue"];
// for (const color of colors) {
//   console.log(color);
// }

// const str = "JavaScript";
// let num = 1;
// for (const value of str) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = value;
//     paragraph.style.color = "red";
//     paragraph.style.display = "inline";
//     paragraph.classList.add("my-class_" + num);
//     document.body.appendChild(paragraph);
//     console.log(value);
//     num++;
// }

// 演習：配列、繰り返し処理
// ◼️演習問題
// テストの点数の、合計値、平均値を求めるプログラムの開発
// スコアは、100, 90, 80, 70, 60とする。

// 「手順」
// 問題により与えられた点数を、配列に格納。
// 合計値を格納する変数を0で初期化。
// 繰り返し処理forにより、配列に格納した点数を一つずつ取り出し、
// 合計値を格納する変数に足してゆく。
// 繰り返し処理が終わったら、平均値を、コンソールに出力する。
// 「補足」
// 配列の長さを求めるには.lengthプロパティを使用する。

// let scores = [100, 90, 80, 70, 60];
// let sum = 0;
// for ( let i = 0; i < scores.length; i++) {
//     sum += scores[i];
// }
// console.log("平均値：" + sum / scores.length);

// let scores = [100, 90, 80, 70, 60];
// let sum = 0;
// for (let i = 0; i < scores.length; i++) {
//   sum += scores[i];
// }

// let average = sum / scores.length;

// console.log("合計値：" + sum);
// console.log("平均値：" + average);

// 一本１００円の缶チューハイを１５本買ったときに消費税を加えたものを出してください。
// let price = 100;
// let count = 15;
// let tax = 1.1;
// let total = price * count * tax;
// console.log(total);

// 要素ノードを取得しよう
// let btn = document.getElementById("triggerButton");
// btn.addEventListener(
//     "click",
//     function (e) {
//         // alert("clicked!");
//         // IDによるノードの取得
//         let headerTitle = document.getElementById("headerTitle");
//         console.log(headerTitle);
//         // コンテンツの取得（テキストの取得）
//         console.log(headerTitle.textContent);
//     },
//     false
// );

// // テキストの置換をしよう
// let btn = document.getElementById("triggerButton");
// btn.addEventListener(
//     "click",
//     function (e) {
//         // IDによる要素の取得
//         let headerTitle = document.getElementById("headerTitle");
//         // テキストの置換
//         if (headerTitle.textContent === "見出し") {
//             headerTitle.textContent = "タイトルが変更されました";
//         } else if (headerTitle.textContent === "タイトルが変更されました") {
//             headerTitle.textContent = "見出し";
//         }
//     },
//     false
// );

// 属性値を取得しよう
// let btn = document.getElementById("triggerButton");
// btn.addEventListener(
//     "click",
//     function (e) {
//         // IDによるノードの取得
//         let inputColorName = document.getElementById("inputColorName");
//         // 取得したinput要素の入力値を取得
//         let colorNameText = inputColorName.value;
//         // 取得したinput要素のname属性値を取得
//         let inputName = inputColorName.getAttribute("name");
//         // idがshowTextのp要素を取得
//         let showText = document.getElementById("showText");
//         // 出力
//         if (colorNameText === "") {
//             showText.textContent = "入力してください。";
//         } else {
//             showText.textContent = `name属性： ${inputName}, 入力されたテキスト： ${colorNameText}`;
//         }
//     },
//     false
// );

// 属性の追加、更新、削除をしよう
// let showText = document.getElementById("showText");
// let setRedClassButton = document.getElementById("setRedClassButton");
// setRedClassButton.addEventListner("click", function (e) {
//     showText.setAttribute("class", "red");
// }, false);

// let setBlueClassButton = document.getElementById("setBlueClassButton");
// setBlueClassButton.addEventListner("click", function (e) {
//     showText.setAttribute("class", "blue");
// }, false);

// let removeClassButton = document.getElementById("removeClassButton");
// removeClassButton.addEventListner("click", function (e) {
//     showText.removeAttribute("class");
// }, false);

// let showText = document.getElementById("showText");
// let setRedClassButton = document.getElementById("setRedClassButton");
// setRedClassButton.addEventListener("click", function (e) {
//     if (showText.classList.contains("blue")) {
//         showText.classList.remove("blue");
//         showText.classList.add("red");
//     } else {
//         showText.classList.add("red");
//     }
// });

// let setBlueClassButton = document.getElementById("setBlueClassButton");
// setBlueClassButton.addEventListener("click", function (e) {
//     if (showText.classList.contains("red")) {
//         showText.classList.remove("red");
//         showText.classList.add("blue");
//     } else {
//         showText.classList.add("blue");
//     }
// });

// let removeClassButton = document.getElementById("removeClassButton");
// removeClassButton.addEventListener("click", function (e) {
//     showText.classList.remove("red");
//     showText.classList.remove("blue");
// });

// // class属性を追加・更新（赤）
// let setRedClassButton = document.getElementById("setRedClassButton");
// setRedClassButton.addEventListener(
//     "click",
//     function (e) {
//         let showText = document.getElementById("showText");
//         showText.setAttribute("class", "red");
//     },
//     false
// );

// // class属性を追加・更新（青）
// let setBlueClassButton = document.getElementById("setBlueClassButton");
// setBlueClassButton.addEventListener(
//     "click",
//     function (e) {
//         let showText = document.getElementById("showText");
//         showText.setAttribute("class", "blue");
//     },
//     false
// );

// // 属性の削除
// let removeClassButton = document.getElementById("removeClassButton");
// removeClassButton.addEventListener(
//     "click",
//     function (e) {
//         let showText = document.getElementById("showText");
//         showText.removeAttribute("class");
//     },
//     false
// );

// // タグ名で要素を取得しよう
// let btn = document.getElementById("triggerButton");
// btn.addEventListener(
//     "click",
//     function (e) {
//         let existingParagraph = document.querySelector("#triggerButton + p");
//         if (existingParagraph) {
//             existingParagraph.remove(); // 既存の paragraph 要素があれば削除
//         }
//         let elements = document.getElementsByTagName("p");
//         console.log(elements);
//         for (let i = 0; i < elements.length; i++) {
//             console.log(elements[i].textContent);
//             let paragraph = document.createElement("p");
//             if (i === 1) {
//                 paragraph.textContent = elements[i].textContent;
//                 btn.insertAdjacentElement("afterend", paragraph);
//             }
//         }
//     },
//     false
// );

// 入力フィールドが未入力だった場合、ボタンを非活性化にする
// let inputText = document.getElementById("inputText");
// let button = document.getElementById("button");

// button.disabled = true;

// inputText.addEventListener("input", function (e) {
//     if (inputText.value.trim() !== "") {
//         button.disabled = false;
//     } else {
//         button.disabled = true;
//     }
// });

// button.addEventListener("click", function (e) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = inputText.value;
//     document.body.appendChild(paragraph);
//     inputText.value = "";
//     button.disabled = true;
// });

// // name属性で要素を取得しよう
// let btn = document.getElementById("triggerButton");
// btn.addEventListener(
//     "click",
//     function (e) {
//         let elements = document.getElementsByName("inputText");
//         console.log(elements);
//         console.log(elements[0]);
//         console.log(elements[0].value);
//     },
//     false
// );

// // // クラス名で要素を取得しよう
// let btn = document.getElementById("triggerButton");
// btn.addEventListener(
//   "click",
//   function (e) {
//     let elements = document.getElementsByClassName("foo");
//     console.log(elements);
//     for (let i = 0; i < elements.length; i++) {
//       console.log(elements[i].textContent);
//     }
//   },
//   false
// );

// // セレクタで要素を取得しよう
// let btn = document.getElementById("triggerButton");
// btn.addEventListener(
//     "click",
//     function (e) {
//         let element = document.querySelector(".foo");
//         console.log(element);
//         console.log(element.textContent);
//         // element.textContent = "セレクタで取得した要素のテキストを変更";
//         let elements = document.querySelectorAll(".foo");
//         console.log(elements);
//         for (let i = 0; i < elements.length; i++) {
//             console.log(elements[i].textContent);
//         }
//     },
//     false
// );

// // 要素の追加と削除をしよう
// // ulを生成
// let languageList = document.createElement("ul");
// // ulにid属性を追加
// languageList.id = "languageList";
// // ulをbodyに追加
// document.body.appendChild(languageList);
// // ラベルと入力欄を生成
// let labelInputLanguage = document.createElement("label");
// // label要素にfor属性を追加
// labelInputLanguage.setAttribute("for", "inputLanguage");
// // label要素にテキストを追加
// labelInputLanguage.textContent =
//     "あなたが学習したいプログラミング言語を教えて下さい";
// // label要素にdisplay: block;を追加
// labelInputLanguage.style.display = "block";
// // label要素をbodyに追加
// document.body.appendChild(labelInputLanguage);
// // input要素を生成
// let inputLanguage = document.createElement("input");
// // input要素にid属性を追加
// inputLanguage.id = "inputLanguage";
// // input要素にtype属性を追加
// inputLanguage.type = "text";
// // input要素にplaceholder属性を追加
// inputLanguage.placeholder = "言語を入力してください";
// // input要素にmargin-right: 10px;を追加
// inputLanguage.style.marginRight = "10px";
// // input要素をbodyに追加
// document.body.appendChild(inputLanguage);
// // 追加ボタンを生成
// let addButton = document.createElement("button");
// // button要素にid属性を追加
// addButton.id = "addButton";
// // button要素にテキストを追加
// addButton.textContent = "追加";
// // button要素にmargin-right: 10px;を追加
// addButton.style.marginRight = "10px";
// // button要素をbodyに追加
// document.body.appendChild(addButton);
// window.addEventListener("DOMContentLoaded", function () {
//     inputLanguage.focus(); // 入力欄にフォーカスを設定する
// });
// window.onload = function () {
//     inputLanguage.focus(); // 入力欄にフォーカスを設定する
// };
// window.addEventListener("load", function () {
//     inputLanguage.focus(); // input入力欄にフォーカスを設定する
// });
// inputLanguage.addEventListener("focus", function () {
//     this.placeholder = ""; // フォーカスが当たったときにplaceholderを空にする
// });
// inputLanguage.addEventListener("blur", function () {
//     if (this.value === "") {
//         this.placeholder = "言語を入力してください"; // 入力が空の場合にplaceholderを再表示
//     }
// });
// // 入力欄が空の場合に警告を表示
// inputLanguage.addEventListener("blur", function () {
//     if (this.value === "") {
//         if (!document.querySelector("#warningMessage")) {
//             let paragraph = document.createElement("p");
//             paragraph.id = "warningMessage";
//             paragraph.textContent = "入力してください";
//             document.body.appendChild(paragraph);
//         }
//     }
// });
// // 警告を削除
// addButton.addEventListener("click", function (e) {
//     let inputLanguage = document.querySelector("#inputLanguage");
//     let language = inputLanguage.value;
//     if (language === "") {
//         if (!document.querySelector("#warningMessage")) {
//             let paragraph = document.createElement("p");
//             paragraph.id = "warningMessage";
//             paragraph.textContent = "入力してください";
//             document.body.appendChild(paragraph);
//         }
//         return;
//     }
//     let warningMessage = document.querySelector("#warningMessage");
//     if (warningMessage) {
//         warningMessage.remove();
//     }
//     let listItem = document.createElement("li");
//     listItem.textContent = language;
//     languageList.appendChild(listItem);
//     inputLanguage.value = "";
//     inputLanguage.placeholder = "言語を入力してください";
// });
// // 半角英数字以外の入力を無視
// inputLanguage.addEventListener("input", function () {
//     let inputValue = this.value;
//     let halfWidthValue = convertToHalfWidth(inputValue);
//     if (!halfWidthValue.match(/^[A-Za-z0-9]+$/)) {
//         // 入力された値が半角英数字以外の場合、入力を無視する
//         this.value = halfWidthValue.replace(/[^\x01-\x7E]/g, ""); // 半角英数字以外の文字を削除
//     }
// });
// // 入力された全角英数字および記号を半角に変換する
// function convertToHalfWidth(str) {
//     // 全角英数字および記号を半角に変換する
//     return str.replace(/[！-～]/g, function (match) {
//         return String.fromCharCode(match.charCodeAt(0) - 0xfee0);
//     });
// }
// // 最後の項目を削除
// let removeButton = document.createElement("button");
// removeButton.id = "removeButton";
// removeButton.textContent = "最後の項目を削除";
// document.body.appendChild(removeButton);
// removeButton.addEventListener("click", function (e) {
//     if (languageList.lastElementChild) {
//         languageList.removeChild(languageList.lastElementChild);
//     }
//     let warningMessage = document.querySelector("#warningMessage");
//     if (warningMessage) {
//         warningMessage.remove();
//     }
// });

// let addButton = document.querySelector("#addButton");
// addButton.addEventListener(
//     "click",
//     function (e) {
//         // 入力欄のinput要素を取得
//         let inputLanguage = document.getElementById("inputLanguage");
//         // input要素から文字列を取得
//         let language = inputLanguage.value;
//         if (language === "") {
//             alert("入力してください");
//             return;
//         }
//         // li要素を生成
//         let listItem = document.createElement("li");
//         // li要素のコンテンツの入力された文字列を設定
//         listItem.textContent = language;
//         // ul要素を取得
//         let languageList = document.getElementById("languageList");
//         // リストの末尾に、生成したli要素を追加
//         languageList.appendChild(listItem);
//         // 入力欄の文字列をクリア
//         inputLanguage.value = "";
//     },
//     false
// );

// 削除
// let removeButton = document.getElementById("removeButton");
// removeButton.addEventListener(
//     "click",
//     function (e) {
//         // ur要素を取得
//         let languageList = document.getElementById("languageList");
//         // リストの末尾から要素を削除
//         if (languageList.lastElementChild) {
//             languageList.removeChild(languageList.lastElementChild);
//         }
//     },
//     false
// );

// // Windowオブジェクトを使おう
// window.console.log("Hello World!");
// // コンソール出力
// console.log("Hello World!");

// // 警告表示
// window.alert("Are you OK?");

// // 確認ダイアログ
// window.confirm("Are you OK?");

// // 別のWindowを開く
// window.open("https://www.google.co.jp/");

// Windowを閉じる
// window.close();

// // スクロール
// let triggerButton = document.createElement("button");
// triggerButton.id = "triggerButton";
// triggerButton.type = "button";
// triggerButton.textContent = "SCROLL!";
// document.body.appendChild(triggerButton);
// triggerButton.addEventListener(
//     "click",
//     function (e) {
//         scrollToPosition(0, 300, 100);
//     },
//     false
// );
// function scrollToPosition(startY, endY, duration) {
//     const startTime = performance.now();
//     const distance = endY - startY;
//     function scrollStep(timestamp) {
//         const progress = Math.min((timestamp - startTime) / duration, 1);
//         window.scrollTo(0, startY + distance * progress);
//         if (progress < 1) {
//             requestAnimationFrame(scrollStep);
//         }
//     }
//     requestAnimationFrame(scrollStep);
// }
// for (let i = 0; i < 100; i++) {
//     let paragraph = document.createElement("p");
//     paragraph.textContent = "Hello World!";
//     document.body.appendChild(paragraph);
// }

// イベントハンドラを登録しよう
// let sayHelloButton = document.createElement("button");
// sayHelloButton.id = "sayHelloButton";
// sayHelloButton.type = "button";
// sayHelloButton.textContent = "Hello!";
// document.body.appendChild(sayHelloButton);
// sayHelloButton.addEventListener(
//     "click",
//     function (e) {
//         console.log("Hello World!");
//         console.log(e);
//     },
//     false
// );

// let sayHelloButton = document.createElement("button");
// sayHelloButton.id = "sayHelloButton";
// sayHelloButton.type = "button";
// sayHelloButton.textContent = "Hello!";
// document.body.appendChild(sayHelloButton);
// sayHelloButton.addEventListener(
//     "click",
//     () => {
//         console.log("Hello World!");
//     },
//     false
// );

// let sayHelloButton = document.createElement("button");
// sayHelloButton.id = "sayHelloButton";
// sayHelloButton.type = "button";
// sayHelloButton.textContent = "Hello!";
// document.body.appendChild(sayHelloButton);
// function sayHelloEventHandler(e) {
//     console.log("Hello World!");
//     console.log(e);
// }
// sayHelloButton.addEventListener("click", sayHelloEventHandler, false);

// const sayHelloButton = document.getElementById("sayHelloButton");
// sayHelloButton.addEventListener(
//   "click",
//   () => {
//     console.log("Hello World!");
//   },
//   false
// );

// function sayHelloEventHandler(e) {
//   console.log("Hello World!");
//   console.log(e);
// }
// sayHelloButton.addEventListener("click", sayHelloEventHandler, false);

// // イベントハンドラの削除
// let sayHelloButton = document.createElement("button");
// sayHelloButton.id = "sayHelloButton";
// sayHelloButton.classList.add("hoge");
// sayHelloButton.type = "button";
// sayHelloButton.textContent = "Hello!";
// document.body.appendChild(sayHelloButton);
// function sayHelloEventHandler(e) {
//     console.log("Hello World!");
// }
// sayHelloButton.addEventListener("click", sayHelloEventHandler, false);

// let removeEventHandlerButton = document.createElement("button");
// removeEventHandlerButton.id = "removeEventHandlerButton";
// removeEventHandlerButton.type = "button";
// removeEventHandlerButton.textContent = "Remove";
// document.body.appendChild(removeEventHandlerButton);

// function removeEventHandler(e) {
//     console.log("remove");
//     sayHelloButton.removeEventListener("click", sayHelloEventHandler, false);
// }
// removeEventHandlerButton.addEventListener("click", removeEventHandler, false);

// // changeイベントを利用してイベントハンドラを実行しよう
// let h1Element = document.createElement("h1");
// h1Element.textContent = "学習したいプログラミング言語をチェック";
// document.body.appendChild(h1Element);

// let labelElement = document.createElement("label");
// labelElement.textContent = "すべてチェック";
// document.body.appendChild(labelElement);

// let inputElement = document.createElement("input");
// inputElement.type = "checkbox";
// inputElement.id = "checkAll";
// inputElement.name = "checkAll";
// inputElement.value = "1";
// labelElement.appendChild(inputElement);

// let hrElement = document.createElement("hr");
// document.body.appendChild(hrElement);

// let labelElement1 = document.createElement("label");
// labelElement1.style.marginRight = "10px";
// labelElement1.textContent = "JavaScript";
// document.body.appendChild(labelElement1);

// let inputElement1 = document.createElement("input");
// inputElement1.type = "checkbox";
// inputElement1.name = "language";
// inputElement1.value = "1";
// labelElement1.appendChild(inputElement1);

// let labelElement2 = document.createElement("label");
// labelElement2.style.marginRight = "10px";
// labelElement2.textContent = "Ruby";
// document.body.appendChild(labelElement2);

// let inputElement2 = document.createElement("input");
// inputElement2.type = "checkbox";
// inputElement2.name = "language";
// inputElement2.value = "2";
// labelElement2.appendChild(inputElement2);

// let labelElement3 = document.createElement("label");
// labelElement3.style.marginRight = "10px";
// labelElement3.textContent = "PHP";
// document.body.appendChild(labelElement3);

// let inputElement3 = document.createElement("input");
// inputElement3.type = "checkbox";
// inputElement3.name = "language";
// inputElement3.value = "3";
// labelElement3.appendChild(inputElement3);

// let labelElement4 = document.createElement("label");
// labelElement4.textContent = "Python";
// document.body.appendChild(labelElement4);

// let inputElement4 = document.createElement("input");
// inputElement4.type = "checkbox";
// inputElement4.name = "language";
// inputElement4.value = "4";
// labelElement4.appendChild(inputElement4);

// // changeイベントを利用してイベントハンドラを実行しよう
// // イベントハンドラ
// function handleChange() {
//     // 「すべてにチェックボックス」の要素を取得
//     const checkAll = document.querySelector("#checkAll");
//     // name属性がlanguageのチェックボックス要素を取得
//     const checkBoxes = document.querySelectorAll('input[name="language"]');
//     // name属性がlanguageのチェックボックス要素をループ処理
//     for (let i = 0; i < checkBoxes.length; i++) {
//         // チェックボックスのチェック状態を、
//         // 「すべてのチェックボックス」の状態に合わせる
//         checkBoxes[i].checked = checkAll.checked;
//     }
// }

// // checkAllチェックボックスのchangeイベントのイベントハンドラを登録

// const ca = document.querySelector("#checkAll");
// ca.addEventListener("change", handleChange, false);

// DOMContentLoadedイベントとloadイベントを使おう
// 例題
// 「Now Loading...」表示 + 画像表示をする
// DOMContentLoadedイベントが発生したら、alertダイアログを表示する。
// loadイベントが発生したら、「Now Loading...」を非表示にする。

// // javascriptで画像のマウスオン、マウスアウトを実装
// let img = document.createElement("img");
// img.src =
//     "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg";
// img.alt = "猫の画像";
// img.style.width = "200px";
// img.style.height = "200px";
// document.body.appendChild(img);
// img.addEventListener("mouseover", function (e) {
//     this.src =
//         "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/fEK4jvgnApg.jpg";
// });
// img.addEventListener("mouseout", function (e) {
//     this.src =
//         "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg";
// });

// // DOMContentLoaded
// let paragraph = document.createElement("p");
// paragraph.textContent = "Now Loading...";
// paragraph.id = "nowLoading";
// document.body.appendChild(paragraph);

// let img = document.createElement("img");
// img.src =
//     "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg";
// img.alt = "猫の画像";
// document.body.appendChild(img);

// // document.addEventListener(
// //     "DOMContentLoaded",
// //     function () {
// //         alert("DOMContentLoaded");
// //     },
// //     false
// // );

// // load
// window.onload = function () {
//     const nowLoading = document.querySelector("#nowLoading");
//     nowLoading.style.display = "none";
// };

// // 演習：数取器（カウンター）を作ろう
// let num = document.querySelector(".num");
// let counter = document.querySelector("#counter");
// let reset = document.querySelector("#reset");

// counter.addEventListener("click", function () {
//     num.textContent = Number(num.textContent) + 1;
// });

// reset.addEventListener("click", function () {
//     num.textContent = 0;
// });

// let num = 0;

// function updateCounter(num) {
//   const counter = document.getElementById("counter");
//   counter.textContent = num;
// }

// function countUp() {
//   num++;
//   // const counter = document.getElementById("counter");
//   // counter.textContent = num;
//   updateCounter(num);
// }

// function countDown() {
//   num--;
//   const counter = document.getElementById("counter");
//   counter.textContent = num;
// }

// function reset() {
//   num = 0;
//   // const counter = document.getElementById("counter");
//   // counter.textContent = num;
//   updateCounter(num);
// }

// // 演習問題：文字数カウンターを作ろう
// // イベントハンドラ
// function keyUp(e) {
//     let str = document.querySelector("#inputText").value;
//     str = str.replace(/\r?\n/g, "");
//     let characterCount = document.querySelector("#characterCount");
//     let num = 10 - str.length;
//     characterCount.textContent = num;
//     let characterCountWrap = document.querySelector("#characterCountWrap");
//     if (num < 0) {
//         characterCountWrap.style.color = "red";
//     } else {
//         characterCountWrap.style.color = "black";
//     }
// }

// const inputText = document.querySelector("#inputText");
// inputText.addEventListener("keyup", keyUp, false);

// function keyUp(e) {
//     let str = inputText.value;
//     str = str.replace(/\r?\n/g, "");
//     let num = 10 - str.length;
//     const characterCount = document.querySelector("#characterCount");
//     characterCount.textContent = num;
//     const characterCountWrap = document.querySelector("#characterCountWrap");
//     if (num < 0) {
//         characterCountWrap.style.color = "red";
//     } else {
//         characterCountWrap.style.color = "black";
//     }
// }

// const inputText = document.querySelector("#inputText");
// inputText.addEventListener("keyup", keyUp, false);

// // 画像データを準備しよう
// const images = [
//     {
//         src: "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg",
//         description: "猫の画像1",
//     },
//     {
//         src: "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/fEK4jvgnApg.jpg",
//         description: "猫の画像2",
//     },
//     {
//         src: "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/egfS7HzgKcc.jpg",
//         description: "猫の画像3",
//     },
//     {
//         src: "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/e-S23SJzFqs.jpg",
//         description: "猫の画像4",
//     },
//     {
//         src: "https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/Hnwm8ktAd6E.jpg",
//         description: "猫の画像5",
//     },
// ];

// // // メイン画像の初期値を設定
// let image = document.createElement("img");
// image.setAttribute("src", images[0].src);
// image.setAttribute("alt", images[0].description);
// image.style.width = "600px";

// // 説明の初期値を設定
// let paragraph = document.createElement("p");
// paragraph.textContent = images[0].description;

// // // 作成した要素を表示する
// let main_image = document.querySelector("#main_image");
// main_image.insertBefore(image, null);
// main_image.insertBefore(paragraph, null);

// // サムネイルを表示しよう
// let thumbnails = document.querySelector("#thumbnails");
// for (let i = 0; i < images.length; i++) {
//     let thumbnailImage = document.createElement("img");
//     thumbnailImage.setAttribute("src", images[i].src);
//     thumbnailImage.setAttribute("alt", images[i].description);
//     thumbnailImage.style.width = "100px";
//     thumbnailImage.style.height = "100px";
//     thumbnailImage.style.margin = "5px";
//     thumbnailImage.style.cursor = "pointer";
//     thumbnails.insertBefore(thumbnailImage, null);
// }

// // クリックしたサムネイル画像をメイン画像に設定する
// thumbnails.addEventListener("click", function (e) {
//     // クリックされた要素がimg要素であるかを確認
//     if (e.target.tagName === "IMG") {
//         // クリックされたサムネイル画像のsrcとalt属性を取得し、メイン画像に設定
//         image.src = e.target.src;
//         paragraph.textContent = e.target.alt;
//     }
// });

// // 実践：フォトギャラリーを開発しよう
// // HTML側を実装しよう

// // メイン画像の初期値を設定
// let image = document.createElement("img");
// image.setAttribute("src", images[0].src);
// image.setAttribute("alt", images[0].description);

// // 説明の初期値を設定
// let description = document.createElement("p");
// description.textContent = image.alt;

// // 作成した要素を表示する
// let mainImage = document.getElementById("main_image");
// mainImage.insertBefore(image, null);
// mainImage.insertBefore(description, null);

// // サムネイルを表示しよう
// let thumbnails = document.getElementById("thumbnails");
// for (let i = 0; i < images.length; i++) {
//     let thumbnailImage = document.createElement("img");
//     thumbnailImage.setAttribute("src", images[i].src);
//     thumbnailImage.setAttribute("alt", images[i].description);
//     thumbnails.insertBefore(thumbnailImage, null);
// }

// // スタイルを設定しよう
// let thumbnailImages = document.querySelectorAll("#thumbnails img");
// for (let i = 0; i < thumbnailImages.length; i++) {
//     thumbnailImages[i].style.width = "100px";
//     thumbnailImages[i].style.height = "100px";
//     thumbnailImages[i].style.margin = "5px";
// }

// // クリックしたサムネイル画像をメイン画像に設定する
// thumbnails.addEventListener(
//     "click",
//     function (e) {
//         if (e.target.src) {
//             // console.log(e.target);
//             image.src = e.target.src;
//             description.textContent = e.target.alt;
//         }
//     },
//     false
// );

