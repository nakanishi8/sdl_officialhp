import React from 'react'

import styles from '../styles.module.scss'

const DataResources = () => {
  return (
    <>
      <div className={styles.accordion__contents}>
        <h3 className={styles.accordion__left}>仕事内容</h3>
        <div className={styles.accordion__right}>
          <div>
            「保険のその先へ～安心、安全、健康を提供する真のサービス産業になります」と宣言し、デジタルの力で人々の暮らしを幸せに導く挑戦を始めた当ホールディングス。
            <br />
            2016年4月に始動したデジタル戦略部で、既存事業及び新事業に関する企画・開発を担うデータサイエンティストを募集します。
            <br />
            前例のないチャレンジを数多く仕掛けている当社で、ご自身のキャリアをより高めていきたいとお考えの方をお迎えしたいと考えております。
          </div>

          <div>
            IT領域におけるエンジニアリング経験を持つ方や、コンピューターサイエンスを大学などで専攻していた方、ビッグデータ統計・分析の実務経験、さらには起業経験のある方など、さまざまなバックグラウンドを持つ仲間を求めています。
            <br />
            保険業界に関する知識・経験は必須ではありません。あなた自身のご経験を活かしながら、「ビッグデータ×データアナリティクス×事業創出」のミッションに立ち向かってください。
          </div>

          <div>
            ご経験とご志向にあわせてビックデータ事業企画・データ分析プロジェクト・分析環境構築などの役割を担っていただきます。
            <br />
            保険分野に限らず、モビリティや自然災害、ヘルスケア分野等、今後さまざまな領域でデータ活用いただくチャンスがあります。
          </div>

          <div>
            【具体的には】
            <ul>
              <li>
                ●データ分析に基づく、業務効率化、ビジネスモデル構築、商品企画、サービス開発、
                <br />
                およびデータ戦略等、各種戦略の企画立案サポート
              </li>
              <li>
                ●データやデジタル技術に関連するステークホルダー（本社関連部門や外部ベンダー、
                <br />
                国内外スタートアップ）との協業・折衝
              </li>
              <li>
                ●当社経営課題への深い理解をベースとした、当社およびグループ会社が保有する
                <br />
                さまざまなデータ分析とアウトプットのビジネスプロセスやシステムへの組み込み
              </li>
            </ul>
          </div>
          <div>※現時点で上記の業務経験はなくても構いません。ご入社後に習得いただきます。</div>
        </div>
      </div>
      <div className={styles.accordion__contents}>
        <h3 className={styles.accordion__left}>必須の経験・スキル</h3>
        <div className={styles.accordion__right}>
          <div>
            【必須（MUST）】
            <ul>
              <li>●データ解析や統計学・機械学習などの分野における知見</li>
              <li>
                ●売上や利益など事業部門のKPIに責任を持って事業を推進したもしくはそれに準ずる経験
              </li>
              <li>●コミュニケーション能力</li>
              <li>●論理的思考能力</li>
            </ul>
          </div>

          <div>
            【歓迎（WANT）】
            <ul>
              <li>
                ●以下のような分野でご自身のスキルを高めていきたいとお考えの方
                <br />
                ・データ戦略に関する企画業務経験
                <br />
                ・機械学習や深層学習の知識をベースとしたアルゴリズム構築や実装の経験
                <br />
                ・データベースの構築・管理技術をベースとした大規模データの管理の経験
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.accordion__contents}>
        <h3 className={styles.accordion__left}>待遇</h3>
        <div className={styles.accordion__right}>
          <div>
            年収水準：450万円～1500万円
            <br />
            ※上記年収は目安となります。スキル・経験などに応じて決定します。
            <br />
            ※役割等級によっては年俸制となります。
            <br />
            管理監督者求人：無し
            <br />
            労働時間区分：みなし労働時間制（企画業務型裁量労働制）あり
            <br />
            ※労働時間区分は、入社時の役割等級に応じて決定します
            <br />
            {/* eslint-disable-next-line no-irregular-whitespace */}
            所定労働時間：労働時間　７時間
            <br />
            固定残業手当：無し
          </div>
        </div>
      </div>
      <div className={styles.accordion__contents}>
        <h3 className={styles.accordion__left}>勤務地</h3>
        <div className={styles.accordion__right}>
          <div>
            新宿本社ビル（JR、東京メトロ 新宿駅西口 徒歩7分）
            <br />
            {/* eslint-disable-next-line no-irregular-whitespace */}
            ※原則、損保ジャパンの職員（総合系グローバル）としての採用ですが、入社後すぐにＳＯＭＰＯホールディングス株式会社デジタル戦略部へ出向　兼
            損保ジャパン株式会社デジタル戦略部の配属を予定しています。
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

export default DataResources
