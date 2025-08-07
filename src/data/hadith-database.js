const hadithDatabase = [
    // Sahih Bukhari
    {
        collection: 'BUKHARI',
        hadith: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
        translation: 'Actions are but by intention, and every man shall have only that which he intended.',
        number: '1',
        chapter: 'Revelation'
    },
    {
        collection: 'BUKHARI',
        hadith: 'الْإِيمَانُ بِضْعٌ وَسَبْعُونَ شُعْبَةً، فَأَفْضَلُهَا قَوْلُ لاَ إِلَهَ إِلاَّ اللَّهُ، وَأَدْنَاهَا إِمَاطَةُ الأَذَى عَنِ الطَّرِيقِ',
        translation: 'Faith has seventy-odd branches, the highest of which is to say "There is no god but Allah," and the lowest of which is to remove something harmful from the road.',
        number: '9',
        chapter: 'Faith'
    },
    {
        collection: 'BUKHARI',
        hadith: 'الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ، وَالْمُهَاجِرُ مَنْ هَجَرَ مَا نَهَى اللَّهُ عَنْهُ',
        translation: 'A Muslim is one from whose tongue and hand the Muslims are safe, and the emigrant is one who emigrates from what Allah has forbidden.',
        number: '10',
        chapter: 'Faith'
    },
    {
        collection: 'BUKHARI',
        hadith: 'وَالَّذِي نَفْسِي بِيَدِهِ، لاَ يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَالِدِهِ وَوَلَدِهِ وَالنَّاسِ أَجْمَعِينَ',
        translation: 'By Him in whose hand is my soul, none of you will believe until I am more beloved to him than his father, his children, and all people.',
        number: '15',
        chapter: 'Faith'
    },
    {
        collection: 'BUKHARI',
        hadith: 'مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
        translation: 'Whoever believes in Allah and the Last Day should speak good or keep silent.',
        number: '6018',
        chapter: 'Good Manners'
    },

    // Sahih Muslim
    {
        collection: 'MUSLIM',
        hadith: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
        translation: 'None of you believes until he loves for his brother what he loves for himself.',
        number: '45',
        chapter: 'Faith'
    },
    {
        collection: 'MUSLIM',
        hadith: 'الدِّينُ النَّصِيحَةُ، قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ',
        translation: 'Religion is sincere advice. We asked: To whom? He said: To Allah, His Book, His Messenger, and to the leaders and general masses of the Muslims.',
        number: '55',
        chapter: 'Faith'
    },
    {
        collection: 'MUSLIM',
        hadith: 'مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ',
        translation: 'Whoever relieves a believer of distress in this world, Allah will relieve him of distress on the Day of Resurrection.',
        number: '2699',
        chapter: 'Remembrance of Allah'
    },
    {
        collection: 'MUSLIM',
        hadith: 'إِذَا مَاتَ ابْنُ آدَمَ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ: صَدَقَةٍ جَارِيَةٍ، أَوْ عِلْمٍ يُنْتَفَعُ بِهِ، أَوْ وَلَدٍ صَالِحٍ يَدْعُو لَهُ',
        translation: 'When a person dies, his deeds are cut off except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for him.',
        number: '1631',
        chapter: 'Wills and Testaments'
    },
    {
        collection: 'MUSLIM',
        hadith: 'مَنْ دَعَا إِلَى هُدًى كَانَ لَهُ مِنَ الأَجْرِ مِثْلُ أُجُورِ مَنْ تَبِعَهُ لاَ يَنْقُصُ ذَلِكَ مِنْ أُجُورِهِمْ شَيْئًا',
        translation: 'Whoever calls to guidance will have a reward like the rewards of those who follow him, without that decreasing their rewards at all.',
        number: '2674',
        chapter: 'Knowledge'
    },

    // Jami at-Tirmidhi
    {
        collection: 'TIRMIDHI',
        hadith: 'خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ',
        translation: 'The best of people are those who are most beneficial to people.',
        number: '2326',
        chapter: 'Good Manners'
    },
    {
        collection: 'TIRMIDHI',
        hadith: 'اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ',
        translation: 'Fear Allah wherever you are, follow a bad deed with a good one to erase it, and treat people with good character.',
        number: '1987',
        chapter: 'Good Manners'
    },
    {
        collection: 'TIRMIDHI',
        hadith: 'كُلُّ بَنِي آدَمَ خَطَّاءٌ، وَخَيْرُ الْخَطَّائِينَ التَّوَّابُونَ',
        translation: 'All children of Adam are sinners, and the best of sinners are those who repent.',
        number: '2499',
        chapter: 'Supplications'
    },
    {
        collection: 'TIRMIDHI',
        hadith: 'إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ',
        translation: 'Indeed, Allah is beautiful and He loves beauty.',
        number: '2799',
        chapter: 'Good Manners'
    },

    // Sunan Abu Dawud
    {
        collection: 'ABU_DAWUD',
        hadith: 'مَنْ أَصْبَحَ مِنْكُمْ آمِنًا فِي سِرْبِهِ، مُعَافًى فِي جَسَدِهِ، عِنْدَهُ قُوتُ يَوْمِهِ، فَكَأَنَّمَا حِيزَتْ لَهُ الدُّنْيَا',
        translation: 'Whoever among you wakes up secure in his dwelling, healthy in his body, having his food for the day, it is as if the entire world has been given to him.',
        number: '4141',
        chapter: 'General Behavior'
    },
    {
        collection: 'ABU_DAWUD',
        hadith: 'مَا مِنْ دَاءٍ إِلَّا وَلَهُ دَوَاءٌ عَلِمَهُ مَنْ عَلِمَهُ وَجَهِلَهُ مَنْ جَهِلَهُ',
        translation: 'There is no disease that Allah has created, except that He also has created its remedy, known by those who know it and unknown by those who do not.',
        number: '3855',
        chapter: 'Medicine'
    },
    {
        collection: 'ABU_DAWUD',
        hadith: 'مَنْ تَوَاضَعَ لِلَّهِ رَفَعَهُ اللَّهُ',
        translation: 'Whoever humbles himself for Allah, Allah will raise him.',
        number: '4895',
        chapter: 'General Behavior'
    },

    // Sunan an-Nasai
    {
        collection: 'NASAI',
        hadith: 'أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ',
        translation: 'The most beloved of deeds to Allah are those that are most consistent, even if they are small.',
        number: '1362',
        chapter: 'Prayer'
    },
    {
        collection: 'NASAI',
        hadith: 'الطُّهُورُ شَطْرُ الإِيمَانِ',
        translation: 'Cleanliness is half of faith.',
        number: '431',
        chapter: 'Purification'
    },

    // Sunan Ibn Majah
    {
        collection: 'IBN_MAJAH',
        hadith: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
        translation: 'Seeking knowledge is an obligation upon every Muslim.',
        number: '224',
        chapter: 'Knowledge'
    },
    {
        collection: 'IBN_MAJAH',
        hadith: 'لاَ ضَرَرَ وَلاَ ضِرَارَ',
        translation: 'There should be neither harm nor reciprocal harm.',
        number: '2341',
        chapter: 'Judgments'
    },
    {
        collection: 'IBN_MAJAH',
        hadith: 'الْمُؤْمِنُ مِرْآةُ الْمُؤْمِنِ',
        translation: 'The believer is a mirror to the believer.',
        number: '3891',
        chapter: 'Good Manners'
    },

    // Musnad Ahmad
    {
        collection: 'AHMAD',
        hadith: 'احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ',
        translation: 'Preserve Allah and He will preserve you. Preserve Allah and you will find Him before you.',
        number: '2669',
        chapter: 'Advice'
    },
    {
        collection: 'AHMAD',
        hadith: 'لاَ يَحِقُّ لِمُسْلِمٍ أَنْ يَهْجُرَ أَخَاهُ فَوْقَ ثَلاَثِ لَيَالٍ',
        translation: 'It is not permissible for a Muslim to abandon his brother for more than three nights.',
        number: '2285',
        chapter: 'Social Relations'
    },

    // Muwatta Malik
    {
        collection: 'MALIK',
        hadith: 'بُعِثْتُ لأُتَمِّمَ مَكَارِمَ الأَخْلاَقِ',
        translation: 'I was sent to perfect noble character.',
        number: '1614',
        chapter: 'Good Character'
    },
    {
        collection: 'MALIK',
        hadith: 'الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ',
        translation: 'The merciful will be shown mercy by the Most Merciful. Be merciful to those on earth and the One in heaven will be merciful to you.',
        number: '1924',
        chapter: 'Good Character'
    },

    // More Bukhari
    {
        collection: 'BUKHARI',
        hadith: 'الْجَنَّةُ أَقْرَبُ إِلَى أَحَدِكُمْ مِنْ شِرَاكِ نَعْلِهِ، وَالنَّارُ مِثْلُ ذَلِكَ',
        translation: 'Paradise is closer to any of you than the strap of his sandal, and so is Hell.',
        number: '6488',
        chapter: 'Heart-Softening Matters'
    },
    {
        collection: 'BUKHARI',
        hadith: 'مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ',
        translation: 'Whoever Allah wants good for, He gives him understanding of the religion.',
        number: '71',
        chapter: 'Knowledge'
    },
    {
        collection: 'BUKHARI',
        hadith: 'لاَ يَزَالُ الْعَبْدُ يَكْذِبُ وَيَتَحَرَّى الْكَذِبَ حَتَّى يُكْتَبَ عِنْدَ اللَّهِ كَذَّابًا',
        translation: 'A person continues to lie and pursue lies until he is recorded with Allah as a liar.',
        number: '6094',
        chapter: 'Good Manners'
    },

    // More Muslim
    {
        collection: 'MUSLIM',
        hadith: 'مَنْ صَامَ رَمَضَانَ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
        translation: 'Whoever fasts Ramadan out of faith and seeking reward, his previous sins will be forgiven.',
        number: '760',
        chapter: 'Prayer of Travelers'
    },
    {
        collection: 'MUSLIM',
        hadith: 'الصَّلاَةُ خَيْرٌ مَوْضُوعٌ، فَمَنِ اسْتَطَاعَ أَنْ يَسْتَكْثِرَ فَلْيَسْتَكْثِرْ',
        translation: 'Prayer is the best thing that has been placed, so whoever is able to do more should do more.',
        number: '1532',
        chapter: 'Prayer'
    },

    // More varied collections
    {
        collection: 'TIRMIDHI',
        hadith: 'الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ',
        translation: 'A good word is charity.',
        number: '1956',
        chapter: 'Good Manners'
    },
    {
        collection: 'ABU_DAWUD',
        hadith: 'أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الأَمْرِ مِنْكُمْ',
        translation: 'Obey Allah, obey the Messenger, and those in authority among you.',
        number: '2625',
        chapter: 'Government'
    },
    {
        collection: 'NASAI',
        hadith: 'مَنْ قَرَأَ الْقُرْآنَ فَلَهُ بِكُلِّ حَرْفٍ حَسَنَةٌ',
        translation: 'Whoever reads the Quran, for every letter he gets a good deed.',
        number: '2584',
        chapter: 'Quran Recitation'
    },
    {
        collection: 'IBN_MAJAH',
        hadith: 'حُسْنُ الْخُلُقِ وَحُسْنُ الْجِوَارِ يَعْمُرَانِ الدِّيَارَ وَيَزِيدَانِ فِي الأَعْمَارِ',
        translation: 'Good character and good neighborliness populate homes and increase lifespans.',
        number: '4217',
        chapter: 'Good Manners'
    }
];

module.exports = hadithDatabase;