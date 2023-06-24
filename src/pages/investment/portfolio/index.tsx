import styles from '@/styles/Portfolio.module.css'

export default function Portfolio() {
  return (
      <div style={{
        display: 'flex',
        fontFamily: 'sans-serif',
      }}>
        <header className={ styles.header }>
        <nav className={ styles.nav }>

          <nav className={ styles.nav }
               style={{ gap: 20, marginBottom: 20 }}>
            <div className={ styles.userIcon }>    </div>
            <h3>Arthur Monteiro</h3>
          </nav>

          <hr style={{ width: 125, }}/>

          <nav className={styles.nav} style={{
            margin: '25px 0',
            width: '100%',
          }}>
            <ul style={{
              listStyle: 'none',
              display: "flex",
              flexDirection: 'column',
              alignItems: 'center',
              fontSize: '1.2em',
              width: '100%',
            }}>
              <li className={ styles.navOptionItems }>
                <div className={styles.userIcon} style={{
                  width: 50, height: 50, marginBottom: 0,
                }} ></div>
                <a>Carteira</a>
              </li>

              <li className={ styles.navOptionItems }>
                <div className={styles.userIcon} style={{
                  width: 50, height: 50, marginBottom: 0,
                }} ></div>
                <a><p>Trade</p></a>
              </li>
            </ul>
          </nav>
        </nav>
      </header>
        <div style={{
          width: 'calc(100% - 175px)',
        }}>
          <div style={{
            borderRadius: '0 100px 100px 0',
            backgroundColor: '#7F87CF',
            height: 70,
            width: '40%',
          }}>
            <ul style={{
              height: '100%',
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              fontSize: 16,
            }}>
              <li><a>Resumo</a></li>
              <li><a>Ativos</a></li>
              <li><a>Proventos</a></li>
            </ul>
          </div>
          <div style={{
            border: '1px solid black',
          }}>
            Container
          </div>
        </div>
      </div>
  )
}