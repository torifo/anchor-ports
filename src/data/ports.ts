export type PortEntry = {
  number: number;
  name: string;
  sanctuary: string;
  cost: string;
  protocol: "TCP" | "TCP/UDP";
  severity: "critical" | "high" | "medium";
};

export const ports: PortEntry[] = [
  {
    number: 22,
    name: "SSH",
    protocol: "TCP",
    severity: "critical",
    sanctuary: "遠隔管理の聖域。船長が甲板へ降りずに舵を握るための管理航路。",
    cost: "ここを奪えば運用者は締め出される。露出したままなら総当たりと鍵漏洩の砲火を浴びる。",
  },
  {
    number: 53,
    name: "DNS",
    protocol: "TCP/UDP",
    severity: "critical",
    sanctuary: "名前解決の灯台。全ての船が目的地を知るために参照する海図台。",
    cost: "誤用すれば全航路が迷子になる。キャッシュ汚染や増幅攻撃の踏み台にもなる。",
  },
  {
    number: 80,
    name: "HTTP",
    protocol: "TCP",
    severity: "high",
    sanctuary: "平文 Web の入港口。公開情報を受け渡す古い桟橋。",
    cost: "443 へ導く役目を忘れれば、盗聴と改ざんを許す。平文のまま機密を流すな。",
  },
  {
    number: 443,
    name: "HTTPS",
    protocol: "TCP",
    severity: "critical",
    sanctuary: "暗号化 Web の主航路。証明書を掲げ、信用を背負って入港を許す門。",
    cost: "ここを塞げば現代の Web は沈黙する。証明書不備なら乗員は偽港へ誘導される。",
  },
  {
    number: 3306,
    name: "MySQL",
    protocol: "TCP",
    severity: "critical",
    sanctuary: "データ庫の船倉。アプリケーションの積荷を保管する閉鎖区画。",
    cost: "公開網へ晒せば積荷を奪われる。Web と同じ甲板に置くな、内部航路へ隔離せよ。",
  },
  {
    number: 5432,
    name: "PostgreSQL",
    protocol: "TCP",
    severity: "critical",
    sanctuary: "厳密な台帳を守る倉庫港。権限と接続元を選別して開くべき停泊地。",
    cost: "無差別に開けば認証試行と情報窃取の標的になる。許可された船だけを通せ。",
  },
  {
    number: 6379,
    name: "Redis",
    protocol: "TCP",
    severity: "high",
    sanctuary: "高速な信号旗と一時保管の港。内部通信でこそ価値を発揮する。",
    cost: "外洋へ晒した Redis は危険な火薬庫だ。認証なしなら設定も鍵も抜かれかねない。",
  },
  {
    number: 8080,
    name: "HTTP Alternate",
    protocol: "TCP",
    severity: "medium",
    sanctuary: "代替 Web 航路。開発、プロキシ、管理画面が仮停泊しがちな埠頭。",
    cost: "便利さに任せると野良サービスの巣になる。管理画面を置くなら認証と遮断線を張れ。",
  },
];
