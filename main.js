<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Fruit Shop Landing Page</title>
    <meta charset="UTF-8" />
    <meta name="viewport" conaztent="width=device-width" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header id="header">
      <div class="header-content-div">
        <a href="#home-sec">
          <img
            src="https://i.ibb.co/KsztxWq/logo1.png"
            alt="Company Logo"
            id="header-img"
        /></a>
        <nav id="nav-bar">
          <a href="#about" class="nav-link">TENTANG</a>
          <a href="#varieties" class="nav-link">VARIETAS</a>
          <a href="#our-service" class="nav-link">OUR SERVICE</a>
          <a href="#benefits" class="nav-link">MANFAAT</a>
        </nav>
      </div>
    </header>
    <main>
      <section id="home-sec" class="flexible home-sec">
        <div class="eye-grabber-img">
          <img src="https://i.ibb.co/T4czpqY/apples-red-fresh-mellow-juicy-perfect-whole-on-white-desk.jpg" alt="Image of Apples" />
        </div>
        <div class="eye-grabber">
          <h1>Segar, Renyah, Surgawi.</h1>
          <h2>
           100% varietas apel organik dan hidup yang ditanam di Kashmir alias Surga Bumi.
          </h2>
          <button class="btn" onclick="window.location.href = '#contact';">
           Beli Sekarang
          </button>
        </div>
      </section>
      <section id="about" class="sec-padding">
        <h3 class="section-heading">TENTANG KITA</h3>
        <div class="sec-content-div flexible">
          <p>
          Kami adalah sekelompok orang dengan pengalaman puluhan tahun dalam pertumbuhan dan
          menjual apel. Kita tahu seperti apa bentuk apel yang bagus dan bagaimana bentuknya
          sudah dewasa. Buah penting ini membutuhkan iklim sedang, liat
          tanah yang kaya bahan organik selain membutuhkan yang tepat
          fasilitas drainase dan aerasi. Beruntung bagi kami, kami tinggal di Kashmir
          yang dengan bangga dikenal sebagai surga bumi juga merupakan rumahnya
          buah-buahan beriklim sedang seperti apel yang negara bagiannya sangat terkenal
          di seluruh dunia. Faktor utama yang mempengaruhi buah beriklim sedang
          pohon yang subur adalah tanah, iklim dan lingkungan yang sangat tinggi
          menguntungkan dan tak tertandingi di provinsi Kashmir. Kashmir
          apel tampilan, rasa, rasa, ukuran dan warna yang unik.
          </p>
          <img src="https://i.ibb.co/SyKVC8M/about-img.jpg" alt="A man plucking apples from the tree" />
        </div>
      </section>
      <section id="varieties" class="sec-padding">
        <h3 class="section-heading">VARIETAS</h3>
        <div class="sec-content-div flexible">
          <div class="tile">
            <img src="https://i.ibb.co/t2x706V/amber.jpg" alt="photo of amber apples" />
            <h4>Amber</h4>
            <p>
              Buah berwarna merah berukuran sedang ini matang sepenuhnya pada pertengahan Oktober. Dia
              sebagian besar ditanam di Shopian dan Kulgam.
            </p>
            <center>
                <p class="price"><b>Rp.5000/Kg</b></p>
                <button class="buy-now-button">BUY NOW</button></center>
          </div>
          <div class="tile">
            <img
              src="https://i.ibb.co/H4Cnh7v/american-trel.png"
              alt="photo of american trel apples"
            />
            <h4>American Trel</h4>
            <p>
             Variasi buah kecil, bulat, sangat renyah dan manis yang matang
             pada pertengahan September.
            </p>
          </div>
          <div class="tile">
            <img src="https://i.ibb.co/jTDgqYB/red-delicious.png" alt="photo of red delicious apple" />
            <h4>Red Delicious</h4>
            <p>
            Varietas apel matang yang sangat populer dan banyak dibudidayakan
            pada pertengahan September. Dagingnya berwarna putih kehijauan, berbutir kasar dan berair.
            </p>
          </div>
          <div class="tile">
            <img src="https://i.ibb.co/MSvg1QN/maharaja.png" alt="photo of Maharaej apples" />
            <h4>Maharaej</h4>
            <p>
             Sebuah apel besar dengan warna merah dan hijau. Rasanya agak asam tapi
             semakin manis seiring berjalannya waktu dan tersedia pada akhir Oktober.
            </p>
          </div>
          <div class="tile">
            <img src="https://i.ibb.co/zVR1LB2/hazal.png/" alt="photo of Hazratbael apples" />
            <h4>Hazratbael</h4>
            <p>
            Varietas yang cepat rusak dan matang pada awal Juli. Ini adalah
            varietas apel tertua yang dibudidayakan di lembah dan sebagian besar
            dikonsumsi di dalam negeri
            </p>
          </div>
          <div class="tile">
            <img src="https://i.ibb.co/BNFrnZn/golden.png" alt="photo of Golden Delicious apples" />
            <h4>Golden Delicious</h4>
            <p>
           Varietas dengan umur simpan yang relatif lebih lama, renyah,
           berair dan memiliki daging tebal berwarna putih kehijauan yang berubah warna menjadi keemasan
           pematangan. Ini tersedia hingga Januari.
            </p>
          </div>
        </div>
      </section>
      <section id="our-service" class="sec-padding">
        <h3 class="section-heading">LAYANAN KAMI</h3>
        <div class="sec-content-div">
          <div class="bars">
            <div class="icon-container">
              <img src="https://i.ibb.co/w6H542X/Fresh.png" alt="" />
            </div>
            <div class="txt-container">
              <h5>SEGAR</h5></h5>
              <p>Kami mengirimkan apel segar dengan jaminan kesegaran 100%.</p>
            </div>
          </div>
          <div class="bars">
            <div class="icon-container">
              <img src="https://i.ibb.co/FKNq4Qr/delivered.png" alt="" />
            </div>
            <div class="txt-container">
              <h5>CEPAT</h5>
              <p>
               Kami mengirimkan pesanan Anda secepat mungkin, prosedur pengiriman
               dimulai segera setelah apel dipetik dari pohonnya.
              </p>
            </div>
          </div>
          <div class="bars">
            <div class="icon-container">
              <img src="https://i.ibb.co/HHQK1wV/happy.png" alt="" />
            </div>
            <div class="txt-container">
              <h5>Satisfying</h5>
              <p>
                Kami menjamin kepuasan pelanggan 100%. Kami melakukan yang terbaik untuk membuatnya
                pengalaman pembelian Anda lancar. Tapi jika kami mengacaukanmu
                akan mendapat kompensasi atas setiap ketidaknyamanan.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="benefits" class="sec-padding">
        <h3 class="section-heading">MANFAAT</h3>
        <div class="sec-content-div flexible">
          <iframe
            id="video"
            width="560"
            title="Benefits of Apple"
            height="315"
            src="https://www.youtube.com/embed/W_JOJNztrnI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section class="sec-padding" id="contact">
        <h3 class="section-heading">KONTAK</h3>
        <div class="sec-content-div flexible">
          <h6>Untuk melakukan pemesanan atau sekedar mengetahui lebih lanjut hubungi kami:</h6>
          <form
            id="form"
            action="https://www.freecodecamp.com/email-submit"
            method="POST"
          >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Alamat Email Kamu.."
              required
            />
            <input type="submit" class="btn" id="submit" value="Tahu lebih" />
          </form>
        </div>
      </section>
    </main>
    <footer>
      Created by
      <a href="#">Alfi Khoerudin Yusuf</a>
    </footer>
  </body>
  </html>