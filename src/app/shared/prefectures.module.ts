import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Prefecture {
  value: string;
  display: string;
  apiname: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Prefectures {
  static prefectures: Prefecture[] = [
    /*{ value: "HK", display: "北海道" },
    { value: "AO", display: "青森県" },
    { value: "IT", display: "岩手県" },
    { value: "MG", display: "宮城県" },
    { value: "AK", display: "秋田県" },
    { value: "YG", display: "山形県" },
    { value: "FS", display: "福島県" },*/
    { value: "IB", display: "茨城県", apiname: "ibaraki" },
    { value: "TC", display: "栃木県", apiname: "tochigi" },
    { value: "GU", display: "群馬県", apiname: "gunma" },
    { value: "ST", display: "埼玉県", apiname: "saitama" },
    { value: "CB", display: "千葉県", apiname: "chiba" },
    { value: "TY", display: "東京都", apiname: "tokyo" },
    { value: "KN", display: "神奈川県", apiname: "kanagawa" },
    /*{ value: "NI", display: "新潟県" },
    { value: "TM", display: "富山県" },
    { value: "IS", display: "石川県" },
    { value: "FI", display: "福井県" },*/
    { value: "YN", display: "山梨県", apiname: "yamanashi" },
    /*{ value: "NA", display: "長野県" },
    { value: "GI", display: "岐阜県" },*/
    { value: "SZ", display: "静岡県", apiname: "shizuoka" },
    /*{ value: "AI", display: "愛知県" },
    { value: "ME", display: "三重県" },
    { value: "SI", display: "滋賀県" },
    { value: "KY", display: "京都府" },
    { value: "OS", display: "大阪府" },
    { value: "HG", display: "兵庫県" },
    { value: "NR", display: "奈良県" },
    { value: "WA", display: "和歌山県" },
    { value: "TT", display: "鳥取県" },
    { value: "SM", display: "島根県" },
    { value: "OY", display: "岡山県" },
    { value: "HS", display: "広島県" },
    { value: "YA", display: "山口県" },
    { value: "TK", display: "徳島県" },
    { value: "KA", display: "香川県" },
    { value: "EH", display: "愛媛県" },
    { value: "KO", display: "高知県" },
    { value: "FO", display: "福岡県" },
    { value: "SG", display: "佐賀県" },
    { value: "NS", display: "長崎県" },
    { value: "KU", display: "熊本県" },
    { value: "OI", display: "大分県" },
    { value: "MZ", display: "宮崎県" },
    { value: "KG", display: "鹿児島県" },
    { value: "OK", display: "沖縄県" }*/
  ];
}
