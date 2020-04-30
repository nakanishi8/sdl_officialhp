import React from 'react'
import { SectionHeadding } from 'components/Recruit/Headding'
import Button from 'components/Recruit/Button'

import styles from './styles.module.scss'

const map =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3623055761186!2d139.69392071528787!3d35.692700936950246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd5d7abc949%3A0xc46b350fbcdbac69!2z44CSMTYwLTAwMjMg5p2x5Lqs6YO95paw5a6_5Yy66KW_5paw5a6_77yR5LiB55uu77yS77yW4oiS77yR!5e0!3m2!1sja!2sjp!4v1581667604317!5m2!1sja!2sjp'

const Access = () => {
  return (
    <section className={styles.section}>
      <SectionHeadding title={'ACCESS'} />
      <div className={styles.wrap}>
        <iframe src={map} />
        <p className={styles.buttonWrap}>
          <Button
            link="https://goo.gl/maps/sbdLyETdXEaMs48h7"
            text="地図アプリで見る"
            flg="outside"
          />
        </p>
        <div className={styles.mapMain}>
          <p className={styles.name}>ＳＯＭＰＯホールディングス株式会社</p>
          <p className={styles.address}>〒160-8338 東京都新宿区西新宿1-26-1</p>
          <p className={styles.text}>
            JR線、京王線、小田急線、丸の内線、都営新宿線、西武新宿線新宿駅または大江戸線新宿西口駅下車、西口より徒歩10分。
          </p>
          <ul className={styles.textList}>
            <li>・新宿西口広場から、西口交番前を通り地下道を進む。</li>
            <li>
              ・新宿センタービルN-4地下出口の階段をのぼると、目の前にすそ広がりの損保ジャパン本社ビルが見える。
            </li>
            <li>
              ・小田急百貨店前(地上)からは、小田急ハルク、Lタワービル前を経由し、歩道橋から、損保ジャパン本社ビル玄関へ。
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Access
