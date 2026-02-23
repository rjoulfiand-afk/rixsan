// 1. DATA AYAT (50 Ayat Lengkap Tetap Terjaga)
const verses = [
    { 
        text: "Sebab Aku ini mengetahui rancangan-rancangan apa yang ada pada-Ku mengenai kamu, demikianlah firman TUHAN, yaitu rancangan damai sejahtera dan bukan rancangan kecelakaan, untuk memberikan kepadamu hari depan yang penuh harapan.", 
        ref: "Yeremia 29:11",
        devotion: "Kisah Tokoh: Yeremia menulis ini untuk bangsa Israel yang sedang dibuang ke Babel. Mereka merasa hancur, tapi Tuhan mengingatkan bahwa pembuangan itu bukan akhir, melainkan proses pendewasaan menuju masa depan yang cerah."
    },
    { 
        text: "Janganlah hendaknya kamu kuatir tentang apapun juga, tetapi nyatakanlah dalam segala hal keinginanmu kepada Allah dalam doa dan permohonan dengan ucapan syukur.", 
        ref: "Filipi 4:6",
        devotion: "Renungan: Paulus menulis surat ini dari penjara. Kekuatiran adalah pencuri sukacita. Solusi Tuhan bukan berhenti berpikir, tapi memindahkan beban pikiran itu menjadi daftar doa yang penuh syukur."
    },
    { 
        text: "TUHAN adalah gembalaku, takkan kekurangan aku. Ia membaringkan aku di padang yang berumput hijau, Ia membimbing aku ke air yang tenang.", 
        ref: "Mazmur 23:1-2",
        devotion: "Kisah Tokoh: Raja Daud, seorang mantan gembala, tahu bahwa domba tidak perlu tahu arah; ia hanya perlu percaya pada Gembalanya. Fokuslah pada Sang Gembala, bukan pada rumputnya."
    },
    { 
        text: "Kasih itu sabar; kasih itu murah hati; ia tidak cemburu. Ia tidak memegahkan diri dan tidak sombong.", 
        ref: "1 Korintus 13:4",
        devotion: "Renungan: Kasih bukan sekadar perasaan, tapi tindakan. Standar kasih ini adalah gambaran karakter Kristus sendiri. Mintalah hati yang mampu mengasihi tanpa menuntut balas."
    },
    { 
        text: "Segala perkara dapat kutanggung di dalam Dia yang memberi kekuatan kepadaku.", 
        ref: "Filipi 4:13",
        devotion: "Renungan: Ayat ini bukan 'mantra' untuk jadi pahlawan super, melainkan rahasia Paulus untuk tetap merasa cukup (contentment) baik saat berlimpah maupun saat kekurangan bersama Kristus."
    },
    { 
        text: "Tetapi carilah dahulu Kerajaan Allah dan kebenarannya, maka semuanya itu akan ditambahkan kepadamu.", 
        ref: "Matius 6:33",
        devotion: "Renungan: Yesus mengajarkan hukum prioritas. Jika kita fokus pada hal-hal duniawi, kita akan selalu merasa kurang. Jika kita fokus pada apa yang Tuhan mau, Tuhan sendiri yang menjamin kebutuhan kita."
    },
    { 
        text: "Hati yang gembira adalah obat yang manjur, tetapi semangat yang patah mengeringkan tulang.", 
        ref: "Amsal 17:22",
        devotion: "Renungan: Raja Salomo memahami psikologi ribuan tahun lalu. Kesehatan fisik sangat dipengaruhi oleh kesehatan batin. Sukacita di dalam Tuhan adalah imunitas terbaik bagi jiwa dan raga."
    },
    { 
        text: "Percayalah kepada TUHAN dengan segenap hatimu, dan janganlah bersandar kepada pengertianmu sendiri.", 
        ref: "Amsal 3:5",
        devotion: "Kisah Tokoh: Abraham meninggalkan negerinya tanpa tahu tujuannya. Ia melepaskan logikanya dan memegang janji Tuhan. Hasilnya, ia menjadi bapak segala bangsa karena iman."
    },
    { 
        text: "Dalam duniamu kamu menderita penganiayaan, tetapi kuatkanlah hatimu, Aku telah mengalahkan dunia.", 
        ref: "Yohanes 16:33",
        devotion: "Renungan: Yesus tidak menjanjikan hidup tanpa masalah, tetapi Dia menjanjikan kemenangan di tengah masalah. Musuh kita sudah dikalahkan, jadi jangan menyerah di tengah jalan."
    },
    { 
        text: "Berbahagialah orang yang membawa damai, karena mereka akan disebut anak-anak Allah.", 
        ref: "Matius 5:9",
        devotion: "Renungan: Menjadi pembawa damai membutuhkan pengorbanan ego. Saat kita mendamaikan situasi yang kacau, kita sedang memancarkan kemuliaan Allah sebagai anak-anak-Nya."
    },
    { 
        text: "Serahkanlah hidupmu kepada TUHAN dan percayalah kepada-Nya, dan Ia akan bertindak.", 
        ref: "Mazmur 37:5",
        devotion: "Renungan: Kata 'serahkan' berarti menggulungkan beban. Berhenti mencoba mengatur segalanya sendirian. Lepaskan kontrolmu, dan biarkan tangan Tuhan yang bekerja melakukan bagian-Nya."
    },
    { 
        text: "Janganlah kita jemu-jemu berbuat baik, karena apabila sudah datang waktunya, kita akan menuai, jika kita tidak menjadi lemah.", 
        ref: "Galatia 6:9",
        devotion: "Renungan: Menabur kebaikan seringkali melelahkan karena hasilnya tidak langsung terlihat. Ingatlah bahwa ada 'musim panen' spiritual yang pasti datang tepat pada waktunya."
    },
    { 
        text: "Aku memberikan perintah baru kepada kamu, yaitu supaya kamu saling mengasihi; sama seperti Aku telah mengasihi kamu.", 
        ref: "Yohanes 13:34",
        devotion: "Renungan: Standar kasih Kristen bukan lagi 'seperti dirimu sendiri', melainkan 'seperti Kristus'. Kasih yang rela berkorban dan mengampuni meski tidak layak diterima."
    },
    { 
        text: "Kuatkan dan teguhkanlah hatimu, janganlah kecut dan tawar hati, sebab TUHAN, Allahmu, menyertai engkau, ke manapun engkau pergi.", 
        ref: "Yosua 1:9",
        devotion: "Kisah Tokoh: Yosua harus menggantikan Musa memimpin jutaan orang. Ia takut, tapi Tuhan memberikan janji 'penyertaan'. Keberanian sejati adalah tetap maju meski takut, karena tahu Tuhan ada di sampingmu."
    },
    { 
        text: "Tuhan itu baik; Ia adalah tempat pengungsian pada waktu kesusahan; Ia mengenal orang-orang yang berlindung kepada-Nya.", 
        ref: "Nahum 1:7",
        devotion: "Renungan: Saat dunia gonjang-ganjing, kita butuh bunker spiritual. Tuhan bukan sekadar tempat mampir, tapi rumah yang aman saat badai hidup menerjang."
    },
    { 
        text: "Sebab bagi Allah tidak ada yang mustahil.", 
        ref: "Lukas 1:37",
        devotion: "Kisah Tokoh: Maria, seorang gadis desa, menerima kabar mustahil bahwa ia akan mengandung Mesias. Imannya menerima apa yang logika tolak. Bagi Allah, keterbatasan kita adalah panggung kuasa-Nya."
    },
    { 
        text: "Pencobaan-pencobaan yang kamu alami ialah pencobaan biasa, yang tidak melebihi kekuatan manusia. Allah setia dan tidak akan membiarkan kamu dicobai melampaui kekuatanmu.", 
        ref: "1 Korintus 10:13",
        devotion: "Renungan: Tuhan itu seperti instruktur yang tahu kapasitas beban murid-Nya. Jika ujian terasa berat, berarti kapasitas imanmu sedang diperbesar oleh-Nya."
    },
    { 
        text: "Hendaklah kamu murah hati, sama seperti Bapamu adalah murah hati.", 
        ref: "Lukas 6:36",
        devotion: "Renungan: Kemurahan hati Kristen mengalir dari rasa syukur. Kita bermurah hati bukan supaya diberkati, tapi karena kita sudah menerima kasih karunia yang begitu besar secara cuma-cuma."
    },
    { 
        text: "Bersyukurlah kepada TUHAN, sebab Ia baik! Bahwasanya untuk selama-lamanya kasih setia-Nya.", 
        ref: "Mazmur 136:1",
        devotion: "Renungan: Apapun yang berubah dalam hidup kita—pekerjaan, kesehatan, atau hubungan—ada satu hal yang tetap konstan dan permanen: Kasih setia Tuhan."
    },
    { 
        text: "Firman-Mu itu pelita bagi kakiku dan terang bagi jalanku.", 
        ref: "Mazmur 119:105",
        devotion: "Renungan: Pelita di zaman dulu hanya menerangi satu langkah ke depan. Tuhan tidak selalu menunjukkan akhir jalan kita, tapi Dia selalu memberi terang untuk langkah hari ini."
    },
    { 
        text: "Tetapi orang-orang yang menanti-nantikan TUHAN mendapat kekuatan baru: mereka seumpama rajawali yang naik terbang dengan kekuatan sayapnya.", 
        ref: "Yesaya 40:31",
        devotion: "Renungan: Menunggu Tuhan bukan berarti pasif. Ini adalah aktivitas iman yang memperbarui jiwa. Hasilnya, kita tidak hanya berjalan, tapi terbang melampaui badai."
    },
    { 
        text: "Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.", 
        ref: "Matius 11:28",
        devotion: "Renungan: Yesus tidak menawarkan teori untuk tenang, Dia menawarkan Diri-Nya. Kelegaan sejati hanya ditemukan saat kita meletakkan beban kita di bawah kaki salib-Nya."
    },
    { 
        text: "Iman adalah dasar dari segala sesuatu yang kita harapkan dan bukti dari segala sesuatu yang tidak kita lihat.", 
        ref: "Ibrani 11:1",
        devotion: "Kisah Tokoh: Nuh membangun bahtera raksasa di tengah daratan saat hujan bahkan belum pernah turun. Itulah iman: bertindak berdasarkan suara Tuhan, bukan berdasarkan pemandangan mata."
    },
    { 
        text: "Hendaklah kamu saling mengasihi sebagai saudara dan tolong-menolonglah dalam memberi hormat.", 
        ref: "Roma 12:10",
        devotion: "Renungan: Kasih persaudaraan dalam Kristus harus melampaui perbedaan. Budaya Kerajaan Allah adalah budaya yang mendahulukan orang lain dan memberikan hormat dengan tulus."
    },
    { 
        text: "Nama TUHAN adalah menara yang kuat, ke sanalah orang benar berlari dan ia menjadi aman.", 
        ref: "Amsal 18:10",
        devotion: "Renungan: Di tengah serangan pikiran negatif atau intimidasi dunia, sebutlah nama Tuhan. Ada perlindungan hukum dan otoritas rohani saat kita berlindung di dalam nama-Nya."
    },
    { 
        text: "Aku telah menyertai engkau di segala tempat ke mana engkau pergi dan telah melenyapkan segala musuhmu dari depanmu.", 
        ref: "2 Samuel 7:9",
        devotion: "Kisah Tokoh: Tuhan berbicara kepada Daud tentang kesetiaan-Nya sejak ia di padang gembala hingga di istana. Tuhan yang sama menyertai perjalanan hidupmu dari masa lalu hingga hari ini."
    },
    { 
        text: "Damai sejahtera Allah, yang melampaui segala akal, akan memelihara hati dan pikiranmu dalam Kristus Yesus.", 
        ref: "Filipi 4:7",
        devotion: "Renungan: Ada damai yang logis (karena uang cukup), tapi ada damai yang melampaui akal—saat badai mengamuk namun hati tetap tenang karena percaya Tuhan memegang kendali."
    },
    { 
        text: "Sebab di mana hartamu berada, di situ juga hatimu berada.", 
        ref: "Matius 6:21",
        devotion: "Renungan: Hati kita selalu mengikuti investasi kita. Jika kita berinvestasi pada hal-hal surgawi dan membantu sesama, maka hati kita akan tertambat erat pada Tuhan."
    },
    { 
        text: "Karena begitu besar kasih Allah akan dunia ini, sehingga Ia telah mengaruniakan Anak-Nya yang tunggal, supaya setiap orang yang percaya kepada-Nya tidak binasa, melainkan beroleh hidup yang kekal.", 
        ref: "Yohanes 3:16",
        devotion: "Renungan: Inilah inti seluruh Alkitab. Kasih Allah bukan sekadar perasaan, tapi tindakan ekstrem yang memberikan yang paling berharga demi menyelamatkan kita yang berdosa."
    },
    { 
        text: "Siapa yang percaya kepada-Ku, seperti yang dikatakan oleh Kitab Suci, dari dalam hatinya akan mengalir aliran-aliran air hidup.", 
        ref: "Yohanes 7:38",
        devotion: "Renungan: Orang yang penuh Roh Kudus akan menjadi sumber kesegaran bagi lingkungannya. Hidupmu dipanggil bukan untuk menjadi 'waduk' yang menampung, tapi 'sungai' yang menyalurkan berkat."
    },
    { 
        text: "TUHAN itu dekat kepada orang-orang yang patah hati, dan Ia menyelamatkan orang-orang yang remuk jiwanya.", 
        ref: "Mazmur 34:19",
        devotion: "Renungan: Kita sering mencari Tuhan saat sukses, tapi Tuhan paling dekat saat kita hancur. Hati yang remuk adalah pintu masuk bagi kasih karunia Tuhan untuk memulihkan total."
    },
    { 
        text: "Bersukacitalah senantiasa. Tetaplah berdoa. Mengucap syukurlah dalam segala hal.", 
        ref: "1 Tesalonika 5:16-18",
        devotion: "Renungan: Ini adalah gaya hidup orang percaya. Sukacita adalah pilihan, doa adalah nafas, dan syukur adalah sikap hati yang mengakui kedaulatan Tuhan atas segala musim."
    },
    { 
        text: "Tetapi kasih setia TUHAN dari selama-lamanya sampai selama-lamanya atas orang-orang yang takut akan Dia.", 
        ref: "Mazmur 103:17",
        devotion: "Renungan: Kasih manusia bisa pudar dan habis, tapi kasih setia Tuhan bersifat kekal. Dia memegang janji-Nya melampaui batasan waktu dan generasi."
    },
    { 
        text: "Hendaklah kamu kuat di dalam Tuhan, di dalam kekuatan kuasa-Nya.", 
        ref: "Efesus 6:10",
        devotion: "Kisah Tokoh: Gideon merasa dirinya paling kecil, tapi Tuhan memanggilnya 'pahlawan gagah berani'. Kekuatan kita tidak berasal dari otot, tapi dari mandat dan penyertaan Tuhan."
    },
    { 
        text: "Kasihilah sesamamu manusia seperti dirimu sendiri.", 
        ref: "Matius 22:39",
        devotion: "Renungan: Kita tidak bisa mengaku mengasihi Allah yang tidak kelihatan jika kita tidak bisa mengasihi manusia yang nyata di depan mata. Kasih adalah bukti identitas murid Kristus."
    },
    { 
        text: "Sebab Allah memberikan kepada kita bukan roh ketakutan, melainkan roh yang membangkitkan kekuatan, kasih dan ketertiban.", 
        ref: "2 Timotius 1:7",
        devotion: "Renungan: Ketakutan seringkali melumpuhkan potensi. Ingatlah ketakutan tidak berasal dari Allah. Dia memberikan keberanian untuk maju dan kasih untuk melayani."
    },
    { 
        text: "Serahkanlah segala kekuatiranmu kepada-Nya, sebab Ia yang memelihara kamu.", 
        ref: "1 Petrus 5:7",
        devotion: "Renungan: Kata 'memelihara' berarti perhatian yang terus-menerus. Tuhan memperhatikan detail hidupmu lebih dari yang kamu bayangkan. Jangan pikul beban yang bukan bagianmu."
    },
    { 
        text: "Ajarlah kami menghitung hari-hari kami sedemikian, hingga kami beroleh hati yang bijaksana.", 
        ref: "Mazmur 90:12",
        devotion: "Renungan: Hidup ini singkat dan berharga. Kebijaksanaan sejati dimulai saat kita menyadari bahwa setiap hari adalah anugerah yang harus digunakan untuk tujuan kekal."
    },
    { 
        text: "Tetapi buah Roh ialah: kasih, sukacita, damai sejahtera, kesabaran, kemurahan, kebaikan, kesetiaan, kelemahlembutan, penguasaan diri.", 
        ref: "Galatia 5:22-23",
        devotion: "Renungan: Karakter Kristen bukan soal menaati aturan, tapi soal 'buah'. Buah muncul otomatis saat ranting menempel pada pohon. Fokuslah menempel pada Yesus, maka karaktermu akan berubah."
    },
    { 
        text: "Hendaklah kata-katamu senantiasa penuh kasih, jangan hambar, sehingga kamu tahu, bagaimana kamu harus memberi jawab kepada setiap orang.", 
        ref: "Kolose 4:6",
        devotion: "Renungan: Kata-kata kita memiliki kuasa untuk membangun atau meruntuhkan. Mintalah tuntunan Roh Kudus agar setiap ucapanmu menjadi berkat dan kesaksian yang baik bagi sesama."
    },
    { 
        text: "Jika Allah di pihak kita, siapakah yang akan melawan kita?", 
        ref: "Roma 8:31",
        devotion: "Renungan: Ini bukan berarti tidak akan ada musuh, melainkan bahwa tidak ada musuh yang sanggup mengalahkan rencana akhir Tuhan bagi hidupmu. Kamu berada di pihak pemenang."
    },
    { 
        text: "Bersukacitalah dalam pengharapan, sabarlah dalam kesesakan, dan bertekunlah dalam doa!", 
        ref: "Roma 12:12",
        devotion: "Renungan: Tiga kunci untuk melewati masa sulit: tetap memandang janji Tuhan (pengharapan), tenang menghadapi tekanan (sabar), dan terus terhubung dengan Sumber Kekuatan (doa)."
    },
    { 
        text: "TUHAN menetapkan langkah-langkah orang yang hidupnya berkenan kepada-Nya; apabila ia jatuh, tidaklah sampai tergeletak, sebab TUHAN menopang tangannya.", 
        ref: "Mazmur 37:23-24",
        devotion: "Renungan: Melakukan kesalahan atau jatuh bukan berarti akhir. Tangan Tuhan yang kuat memegang tanganmu, memastikan bahwa kegagalanmu hari ini tidak bersifat permanen."
    },
    { 
        text: "Janganlah takut, sebab Aku menyertai engkau, janganlah bimbang, sebab Aku ini Allahmu; Aku akan meneguhkan, bahkan akan menolong engkau.", 
        ref: "Yesaya 41:10",
        devotion: "Renungan: Ketakutan datang saat kita merasa sendirian. Tuhan memberi dua alasan untuk berani: kehadiran-Nya ('Aku menyertai') dan identitas-Nya ('Aku Allahmu')."
    },
    { 
        text: "Pujilah TUHAN, hai jiwaku, dan janganlah lupakan segala kebaikan-Nya!", 
        ref: "Mazmur 103:2",
        devotion: "Renungan: Manusia cenderung mudah lupa pada berkat saat sedang tertimpa masalah. Daud memaksa jiwanya untuk mengingat daftar kebaikan Tuhan di masa lalu agar ia punya kekuatan hari ini."
    },
    { 
        text: "Segala sesuatu yang kamu kehendaki supaya orang perbuat kepadamu, perbuatlah demikian juga kepada mereka.", 
        ref: "Matius 7:12",
        devotion: "Renungan: Dikenal sebagai 'The Golden Rule'. Alih-alih menunggu orang lain baik kepadamu, ambillah inisiatif untuk menjadi berkat bagi mereka terlebih dahulu."
    },
    { 
        text: "Apa pun juga yang kamu perbuat, perbuatlah dengan segenap hatimu seperti untuk Tuhan dan bukan untuk manusia.", 
        ref: "Kolose 3:23",
        devotion: "Renungan: Ini adalah etos kerja Kristen. Bayangkan Tuhan adalah 'Atasan' langsungmu. Kualitas kerjamu, caramu belajar, dan caramu melayani adalah bentuk ibadahmu kepada-Nya."
    },
    { 
        text: "Tunjukkanlah kepadaku jalan-Mu, ya TUHAN, ajarlah aku jalan-jalan-Mu. Bawalah aku berjalan dalam kebenaran-Mu.", 
        ref: "Mazmur 25:4-5",
        devotion: "Renungan: Doa ini adalah tanda kerendahan hati. Mengakui bahwa jalan kita seringkali salah dan kita butuh 'GPS' surgawi untuk memandu setiap keputusan besar dalam hidup kita."
    },
    { 
        text: "Hiduplah dalam perdamaian dengan semua orang!", 
        ref: "Roma 12:18",
        devotion: "Renungan: Ayat ini memiliki catatan: 'sedapat-dapatnya'. Tuhan tahu ada orang yang sulit diajak damai, tugasmu adalah memastikan bahwa perpecahan tidak berasal dari pihakmu."
    },
    { 
        text: "Dan Raja itu akan menjawab mereka: Aku berkata kepadamu, sesungguhnya segala sesuatu yang kamu lakukan untuk salah seorang dari saudara-Ku yang paling hina ini, kamu telah melakukannya untuk Aku.", 
        ref: "Matius 25:40",
        devotion: "Kisah Tokoh: Yesus mengajarkan bahwa melayani orang miskin, sakit, dan terabaikan sama dengan melayani Dia secara langsung. Ini mengubah cara kita memandang sesama yang membutuhkan."
    }
];

// 2. VARIABEL GLOBAL
let currentDevotion = ""; 
let isPlaying = false;

// 3. FUNGSI GENERATE AYAT (EFEK DIPERHALUS)
function generateVerse() {
    const card = document.getElementById('mainCard');
    const textEl = document.getElementById('verseText');
    const refEl = document.getElementById('verseRef');

    // 1. Samarkan konten sedikit
    card.style.opacity = "0";
    card.style.transform = "translateY(5px)";

    setTimeout(() => {
        const random = verses[Math.floor(Math.random() * verses.length)];
        
        // 2. Update Konten
        textEl.innerText = random.text;
        refEl.innerText = random.ref;
        currentDevotion = random.devotion;

        // 3. Restart Animasi Masuk (Fade Up)
        card.classList.remove('fade-transition');
        void card.offsetWidth; // Trigger reflow
        card.classList.add('fade-transition');

        // 4. Munculkan kembali
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200); // Delay singkat agar terasa responsif
}

// 4. FUNGSI MODAL
function showDevotion() {
    const modal = document.getElementById('devotionModal');
    const devotionText = document.getElementById('devotionText');
    if (currentDevotion) {
        devotionText.innerText = currentDevotion;
        modal.style.display = "flex";
    }
}

function closeDevotion() {
    document.getElementById('devotionModal').style.display = "none";
}

// 5. MUSIK & VISUALIZER
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const musicBtn = document.getElementById('musicBtn');
    const visualizer = document.getElementById('visualizer');

    if (isPlaying) {
        music.pause();
        musicBtn.classList.remove('playing');
        visualizer.classList.remove('active');
    } else {
        music.volume = 0.2; 
        music.play().catch(() => console.log("Play blocked"));
        musicBtn.classList.add('playing');
        visualizer.classList.add('active');
    }
    isPlaying = !isPlaying;
}

// 6. SHARE & COPY
function formatVerseMessage() {
    const text = document.getElementById('verseText').innerText;
    const ref = document.getElementById('verseRef').innerText;
    
    // Mengambil isi renungan
    const devotion = document.getElementById('devotionText').innerText;

    // Format pesan tanpa link, hanya Ayat dan Renungan yang rapi
    return `✨ *LIVING WORD* ✨\n` +
           `__________________________\n\n` +
           `📖 *AYAT HARI INI*\n` +
           `"${text}"\n\n` +
           `*— ${ref}*\n` +
           `__________________________\n\n` +
           `🕊️ *RENUNGAN*\n` +
           `${devotion}\n` +
           `__________________________`;
}


// Fungsi copy dan share tetap sama, mereka otomatis memanggil format baru di atas
function copyVerse() {
    const message = formatVerseMessage();
    navigator.clipboard.writeText(message).then(() => {
        const toast = document.getElementById('toast');
        toast.style.opacity = '1';
        setTimeout(() => { toast.style.opacity = '0'; }, 2000);
    });
}

function shareWA() {
    const message = encodeURIComponent(formatVerseMessage());
    window.open(`https://api.whatsapp.com/send?text=${message}`, '_blank');
}
// 7. INIT
const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
document.getElementById('currentDate').innerText = new Date().toLocaleDateString('id-ID', options);

window.onload = generateVerse;

window.onclick = function(event) {
    const modal = document.getElementById('devotionModal');
    if (event.target == modal) closeDevotion();
}
// Fungsi Ganti Tema
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.innerText = '🌙'; // Klik untuk balik ke malam
    } else {
        icon.innerText = '☀️'; // Klik untuk ke siang
    }
}

