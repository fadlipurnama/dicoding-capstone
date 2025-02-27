import React from 'react'
import fototrimester from '../../assets/trimester1.jpg'
import fisiktrimester123 from '../../assets/perubahan-tubuh-trimester-123.jpg'
import bumilKeDokter from '../../assets/ibu-hamil-kedokter.jpg'
import emosiBumil from '../../assets/perubahan-emosi-ibu.jpeg'
import perkembanganJanin from '../../assets/perkembangan-janin.jpg'
import bumilHindari from '../../assets/hal-yg-perlu-dihindari-bumil.jpg'
import makananbumil from '../../assets/10-makanan-bumil.jpg'
import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation/Navigation'

const TRIMESTER_TIGA = () => {
  return (
    <>
    <Navigation />
    <div className='box-content-trimester'>
        <div className='about-trimester'>
        <div className='about-title-trimester'>
          <h1>Trimester 3</h1>
          <p>Trimester ketiga kehamilan dapat membuat sebagian ibu hamil merasa kelelahan dan tidak nyaman. Namun, dengan memahami informasi seputar kehamilan trimester ketiga, dapat membantu ibu hamil mengurangi kecemasan yang mungkin dimiliki saat hari perkiraan lahir yang semakin dekat. </p>
          <p>Kehamilan trimester ketiga berlangsung dari minggu ke 28 sampai 40. Ada banyak tantangan fisik dan emosional yang mesti ibu hamil hadapi pada trimester ketiga ini. Pada kehamilan trimester ketiga, perkembangan bayi dianggap sudah cukup matang di minggu ke-37 dan hanya menunggu waktu lahir. </p>
          </div>
          <div className='foto-trimester'>
          <img src={fototrimester} alt="foto trimester" />
          </div>
        </div>

        <div className='container-card-trimester'>
          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              <div className='fisik-trimester-1'>
                <img src={fisiktrimester123} alt="fisik trimester1" />
              </div>
              <h4>Perubahan Tubuh Ibu Hamil saat Trimester 3</h4>
              <p>Pada trimester ketiga, ibu hamil akan mengalami rasa sakit dan pembengkakan di sekujur tubuh. Anggota badan yang sering mengalami pembengkakan adalah pergelangan kaki, tangan, jari, dan wajah. Payudara ibu hamil juga sudah bisa mengeluarkan ASI. Sebagian ibu hamil mungkin mengalami kecemasan menjelang persalinan. Cemas yang dialami ibu hamil bisa membuatnya sulit tidur. </p>
              <p>Gejala kehamilan lain yang terjadi selama trimester ketiga antara lain:</p>
              <ul>
                <li>Kontraksi Braxton Hicks</li>
                <p>Ibu mungkin merasakan kontraksi ringan dan tidak teratur ini sebagai rasa sesak di perut. Kondisi tersebut biasanya terjadi pada sore atau malam hari, setelah aktivitas fisik atau setelah berhubungan intim. Kontraksi ini juga cenderung terjadi lebih sering dan menjadi lebih kuat saat mendekati hari lahir. Ibu sebaiknya perlu segera menghubungi dokter kandungan jika kontraksi menjadi teratur dan terus meningkat kekuatannya. </p>
                <li>Sakit Punggung</li>
                <p>Hormon kehamilan mengendurkan jaringan ikat yang menahan tulang, terutama di daerah panggul. Perubahan ini bisa menyulitkan ibu dan sering kali menyebabkan ketidaknyaman selama trimster ketiga kehamilan. Untuk mengatasi ini, ibu perlu memilih kursi dengan penyangga punggung yang baik. Lakukan juga olahraga kehamilan secara teratur.</p>
                <li>Sesak Napas</li>
                <p>Di trimester ketiga kehamilan ibu mungkin mudah merasa lelah. Untuk mengatasinya latih postur yang baik untuk memberi paru-paru lebih banyak ruang untuk berkembang. Postur tubuh yang baik untuk ibu hamil yaitu dengan menjaga postur tubuh tetap tegak saat berdiri dan duduk. </p>
                <li>Maag</li>
                <p>Hormon kehamilan dapat mengendurkan katup antara perut dan kerongkongan. Hal ini bisa membuat asam lambung naik kembali ke kerongkongan dan menyebabkan mulas. Untuk mencegahnya, makanlah dalam porsi kecil tetapi sering. Selain itu, hindari makanan yang digoreng, buah yang asam, cokelat, dan makanan pedas.</p>
                <li>Muncul Spider Veins, Varises, dan Wasir</li>
                <p>Peningkatan sirkulasi darah dapat menyebabkan pembuluh darah kecil berwarna merah keunguan muncul di wajah, leher, dan lengan. Kemerahan tersebut biasanya akan memudar setelah melahirkan. Ibu mungkin juga memiliki pembuluh darah bengkak (varises) di kaki. Kondisi tersebut terasa menyakitkan dan gatal di daerah dubur jika wasir juga muncul.</p>
                <p>Untuk meredakan pembengkakan, sering-seringlah berolahraga, posisikan kaki lebih tinggi, serta konsumsi banyak serat  dan minum banyak cairan. Sedangkan untuk mengatasi wasir saat hamil, ibu dapat melakukan terapi air hangat atau sitz bath untuk mengurangi rasa gatal dan iritasi akibat wasir. Sitz bath dilakukan dengan cara merendam bokong di baskom berisi air hangat yang diletakkan di atas dudukan WC.</p>
                <li>Sering Buang Air Kecil</li>
                <p>Saat bayi bergerak dan mengenai panggul, ibu akan merasakan banyak tekanan pada kandung kemih. Hal tersebutlah yang membuat ibu hamil sering buang air kecil. Bahkan air urine mungkin tidak sengaja keluar saat ibu tertawa, batuk, bersin, membungkuk, atau mengangkat benda.</p>
              </ul>
            </div>
          </div>

          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              <div className='makanan-bumil'>
                <img src={makananbumil} alt="makanan bumil" />
              </div>
              <h4>Kebutuhan Nutrisi saat Trimester 3</h4>
              <p>Kebutuhan nutrisi tetap wajib dipenuhi selama trimester ketiga kehamilan, agar ibu hamil dan bayi tetap sehat sampai waktu persalinan datang. Makanan tinggi serat yang berasal dari buah atau sayuran, protein, dan rendah lemak perlu masuk ke daftar makanan sehari-hari pada trimester ketiga. Pastikan juga ibu hamil minum banyak air putih dan mengonsumsi vitamin prenatal.</p>
              <p>Mendapatkan nutrisi yang sehat dan seimbang dapat membantu tubuh ibu yang lelah untuk tetap bugar selama trimester ketiga. Meski kondisi badan dan emosional menjadi lebih mudah lelah, ibu hamil perlu tetap aktif selama trimester ketiga. Teruskan latihan dasar panggul secara rutin untuk melancarkan jalannya persalinan. </p>
              
              <div className='fisik-trimester-1'>
                <img src={bumilHindari} alt="bumil hindari" />
              </div>
              <h4>Hal yang Perlu Dihindari Ibu Hamil saat Trimester Ketiga</h4>
              <p>Pada trimester terakhir kehamilan, ibu sebaiknya tidak melakukan beberapa aktivitas yang bisa berdampak negatif pada ibu dan bayi. Misalnya, ibu perlu menghindari perjalanan jauh dan pergi dengan pesawat terbang. Biasanya pihak maskapai penerbangan akan melarang ibu hamil yang usia kehamilannya sudah lebih dari 34 minggu untuk ikut dalam perjalanan. Jika ibu diharuskan untuk bepergian jauh, lakukan peregangan kaki dengan berjalan-jalan setidaknya per satu atau dua jam.</p>
              <p>Berikut hal-hal lain yang sebaiknya ibu hamil hindari saat memasuki trimester ketiga kehamilan:</p>
              <ul>
                <li>Olahraga berat atau latihan kekuatan yang bisa menyebabkan cedera pada perut.</li>
                <li>Batasi konsumsi kafein dan alkohol.</li>
                <li>Kebiasaan minum obat sembarangan alias tanpa anjuran dokter.</li>
                <li>Konsumsi ikan mentah dan makanan laut bermerkuri tinggi (seperti ikan todak, makerel, dan kakap putih).</li>
                <li>Minum susu yang tidak dipasteurisasi atau produk susu lainnya.</li>
                <li>Konsumsi daging yang diawetkan.</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className='container-2-card-trimester'>
          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              <div className='fisik-trimester-1'>
                <img src={perkembanganJanin} alt="perkembangan janin" />
              </div>
              <h4>Perkembangan Bayi saat Kehamilan Trimester 3</h4>
              <p>Sekitar minggu ke-32, tulang-tulang bayi telah terbentuk sepenuhnya. Bayi juga bisa membuka dan menutup matanya, serta merasakan cahaya. Selain itu, tubuh bayi akan mulai menyimpan mineral seperti zat besi dan kalsium.</p>
              <p>Di minggu ke-36, posisi kepala bayi sudah harus menghadap ke bawah. Jika bayi tidak pindah ke posisi ini, dokter mungkin akan menyarankan ibu melakukan persalinan caesar. </p>
              <p>Setelah minggu ke-37 berlalu, perkembangan bayi dianggap sudah sempurna sepenuhnya karena organ tubuhnya sudah berfungsi. Umumnya, di usia kehamilan ini bayi memiliki panjang 48-53 sentimeter dan memiliki berat badan antara 2,7 – 4 kilogram.</p>
            </div>
          </div>

          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              <div className='makanan-bumil'>
                <img src={emosiBumil} alt="emosi bumil" />
              </div>
              <h4>Perubahan Emosi pada Kehamilan Trimester 3</h4>
              <p>Saat hari perkiraan lahir semakin dekat, ketakutan tentang persalinan mungkin akan muncul. Ibu mulai khawatir apakah prosesnya akan menyakitkan, berapa lama akan bertahan dari rasa sakit, hingga khawatir apakah ibu bisa melewatinya. </p>
              <p>Untuk mengatasi hal ini, ibu perlu mempertimbangkan untuk mengikuti kelas melahirkan. Ibu akan mempelajari apa yang dikhawatirkan dan bertemu dengan ibu hamil lainnya untuk saling berbagi kegembiraan dan kekhawatiran. Berbicaralah dengan orang yang memiliki pengalaman melahirkan yang positif. Hal tersebut bisa meningkatkan rasa percaya diri dan menghilangkan rasa khawatir.</p>
            </div>
          </div>

          <div className='card-desc-trimester'>
            <div className='card-judul-desc-trimester'>
              <div className='makanan-bumil'>
                <img src={bumilKeDokter} alt="bumil ke dokter" />
              </div>
              <h4>Kapan Harus ke Dokter?</h4>
              <p>Segera kunjungi dokter jika ibu mengalami gejala berikut:</p>
              <ul>
                <li>Sakit perut yang parah atau kram.</li>
                <li>Mual atau muntah yang parah.</li>
                <li>Mengalami pendarahan.</li>
                <li>Pusing parah.</li>
                <li>Nyeri atau sensasi terbakar saat buang air kecil.</li>
              </ul>
            </div>
          </div>
        </div>


<div className='card-trimester-mingguan'>
        <div className='judul-perkembangan-janin'>
        <h2>Perkembangan janin dari minggu ke minggu</h2>
        </div>
        <div className='container-card-mingguan'>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-usia-27-minggu' target="_blank" rel="noreferrer"><h4>27</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-pada-usia-28-minggu' target="_blank" rel="noreferrer"><h4>28</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-pada-usia-29-minggu' target="_blank" rel="noreferrer"><h4>29</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-pada-usia-30-minggu' target="_blank" rel="noreferrer"><h4>30</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/begini-perkembangan-janin-pada-usia-31-minggu' target="_blank" rel="noreferrer"><h4>31</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-32-minggu' target="_blank" rel="noreferrer"><h4>32</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-33-minggu' target="_blank" rel="noreferrer"><h4>33</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-34-minggu' target="_blank" rel="noreferrer"><h4>34</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-35-minggu' target="_blank" rel="noreferrer"><h4>35</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-36-minggu' target="_blank" rel="noreferrer"><h4>36</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-37-minggu' target="_blank" rel="noreferrer"><h4>37</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-38-minggu' target="_blank" rel="noreferrer"><h4>38</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-39-minggu' target="_blank" rel="noreferrer"><h4>39</h4></a>
        </div>
        <div className='card-mingguan'>
          <p>Minggu</p>
          <a href='https://www.halodoc.com/artikel/perkembangan-janin-usia-40-minggu' target="_blank" rel="noreferrer"><h4>40</h4></a>
        </div>
        </div>

        <div className='text-trimester1'>
          <p>Trimester 3</p>
        </div>

      </div>
      </div>
          <Footer />
          </>
  )
}

export default TRIMESTER_TIGA
