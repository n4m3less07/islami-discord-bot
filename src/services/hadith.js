const hadithDatabase = require('../data/hadith-database');

class Hadith {
    constructor() {
        this.database = hadithDatabase;
        console.log(`loaded ${this.database.length} hadiths `);
    }

    async getRandomHadith() {
        try {
            const randomIndex = Math.floor(Math.random() * this.database.length);
            const randomHadith = this.database[randomIndex];
        
            console.log('selected random hadith:', randomHadith);

            return {
                collection: randomHadith.collection,
                hadith: randomHadith.hadith,       
                translation: randomHadith.translation,
                number: randomHadith.number,
                chapter: randomHadith.chapter,
            };
        } catch (error) {
            console.error('error getting random hadith from database:', error.message);
            return null;
        }
    }

    getRandomHadithByCollection(collectionName) {
        try {
            const filteredHadiths = this.database.filter(
                hadith => hadith.collection.toLowerCase() === collectionName.toLowerCase()
            );

            if (filteredHadiths.length === 0) {
                return this.getRandomHadith(); 
            }

            const randomIndex = Math.floor(Math.random() * filteredHadiths.length);
            const randomHadith = filteredHadiths[randomIndex];

            console.log(`🎯 Hadith from ${collectionName}:`, randomHadith);

            return {
                collection: randomHadith.collection,
                hadith: randomHadith.hadith,
                translation: randomHadith.translation,
                number: randomHadith.number,
                chapter: randomHadith.chapter,
            };
        } catch (error) {
            console.error('❌ Error getting hadith by collection:', error.message);
            return this.getRandomHadith();
        }
    }

    getDatabaseStats() {
        const stats = {};
        this.database.forEach(hadith => {
            stats[hadith.collection] = (stats[hadith.collection] || 0) + 1;
        });

        return {
            total: this.database.length,
            byCollection: stats,
        };
    }
}

module.exports = Hadith;
