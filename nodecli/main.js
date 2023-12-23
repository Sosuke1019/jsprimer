import { program } from 'commander';
import * as fs from "node:fs/promises";
import { md2html } from './md2html';


// gfmオプションを定義する
program.option("--gfm", "GFMを有効にする");
// コマンドライン引数からファイルパスを取得
program.parse(process.argv);
// パースした結果をprogram.args配列から取り出す
const filePath = program.args[0];


// オプションのパース結果をオブジェクトとして取得
const options = program.opts();


// コマンドライン引数で指定されなかったオプションにデフォルト値を上書きする
const cliOptions = {
    gfm: options.gfm ?? false,
}


// ファイルをUTF-8として非同期で読み込む
fs.readFile(filePath, { encoding: "utf-8"}).then(file => {
    const html = md2html(file, cliOptions)
    console.log(html);
}).catch(err => {
    console.error(err);
    // 終了ステータス1(一般的なエラー)としてプロセスを終了する
    process.exit(1);
})