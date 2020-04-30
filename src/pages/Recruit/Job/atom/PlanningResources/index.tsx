import React from 'react'

import styles from '../styles.module.scss'

const PlanningResources = () => {
  return (
    <>
      <div className={styles.accordion__contents}>
        <h3 className={styles.accordion__left}>仕事内容</h3>
        <div className={styles.accordion__right}>
          <div>
            SOMPOホールティングスのデジタル戦略部門において、デジタル技術を最大限に活用することで「安心・安全・健康」の体験価値を創出、または品質、生産性を抜本的に向上するプロジェクトを、中心的な立場で推進していただきます。
          </div>

          <div>
            ＜業務詳細＞
            <br />
            デジタル技術およびICTの動向を調査・研究し、その最大活用によって新商品・サービス等の企画・開発・推進を通じて、同社グループのデジタル戦略の実現を推し進めていただきます。
            <ul>
              <li>◆デジタル技術およびICTの動向調査・研究</li>
              <li>◆顧客ニーズ/業務ニーズ等の情報収集</li>
              <li>◆デジタル技術・ICTを活用した新商品、サービス等の企画立案</li>
              <li>◆プロジェクトマネジメント</li>
              <li>◆実装方法や全体アーキテクチャ検討</li>
              <li>◆パートナー企業との交渉および選定</li>
              <li>◆グループ会社、関連部門との連携による実開発、現場での技術検証、効果検証</li>
              <li>◆導入支援（現場サポート等）と保守（プログラム修正等を含む）</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.accordion__contents}>
        <h3 className={styles.accordion__left}>求める人材像</h3>
        <div className={styles.accordion__right}>
          <div>
            決まった答えやプロセスがないなかで試行錯誤をしていきながら自分自身で解を生み出し、複数のプロジェクトを立ち上げ急速に成長させていくことが求められます。
          </div>
        </div>
      </div>
      <div className={styles.accordion__contents}>
        <h3 className={styles.accordion__left}>必須の経験・スキル</h3>
        <div className={styles.accordion__right}>
          <div>
            <ul>
              <li>◆ドキュメント作成やコーディング含めて自ら手を動かして前に進められる力</li>
              <li>◆ユーザー目線で物事を考えられる方</li>
              <li>
                ◆急速かつ流動的な共同作業環境で同僚と円滑な人間関係を築けるコミュニケーション能力
              </li>
              <li>◆簡単な会話が可能なレベルの英語能力（中級）</li>
              <li>
                ◆事業会社にて以下のいずれの経験を持つ方
                <br />
                ・Webサービス/スマートフォンアプリの企画・プロジェクトマネジメント、導入設計経験のある方
                <br />
                ・UI/UX設計の知識と経験を持ち、画面設計、要件定義から制作ディレクションを推進できる方
                <br />
                ・スマートフォンアプリやサーバサイドの開発経験をお持ちの方
                <br />
                ・プロダクト管理、実装、法務、財務、マーケティングなど、複数部署のメンバーで構成されるチームを運営、主導してきた方デジタル・ICT技術の活用にあたっての国内外の企業やスタートアップ、大学との連携・協業をされてきた方
                <br />
                ・事業会社においてデジタル・ICT技術を活用した、新規商品・サービスの調査・研究開発や新規ビジネスの企画・推進プロジェクトのメインプレイヤーの一人として活躍した方
              </li>
            </ul>
          </div>

          <div>
            ※保険業界に関する知識・経験は問いません。さまざまなバックグラウンドを持つ仲間を求めています。
          </div>
        </div>
      </div>
      <div className={styles.accordion__contents}>
        <h3 className={styles.accordion__left}>応募方法</h3>
        <div className={styles.accordion__right}>
          <div>下記いずれかのエージェントにご相談ください。</div>
          <ul className={styles.accordion__link}>
            <li>
              <a target="_blank" href="https://www.r-agent.com/">
                リクルートキャリア（リクルートエージェント）
              </a>
            </li>
            <li>
              <a target="_blank" href="https://doda.jp/consultant/">
                パーソルキャリア（doda）
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.bizreach.jp/">
                ビズリーチ
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.procommit.co.jp/">
                プロコミット
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.kotora.jp/">
                コトラ
              </a>
            </li>
            <li>
              <a target="_blank" href="http://www.jac-recruitment.jp/">
                ジェイ エイ シー リクルートメント
              </a>
            </li>
            <li>
              <a target="_blank" href="https://type.jp/">
                キャリアデザインセンター（type）
              </a>
            </li>
            <li>
              <a target="_blank" href="https://freelance.levtech.jp/">
                レバテック
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default PlanningResources
