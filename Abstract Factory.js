
class Main {
	setfilm(film){
		this.film = film;
	}
	setSound(sound){
		sound === 'uk' ? this.soundUk() : this.soundEn();
	}
	soundUk() {
		this.sound = 'ukraine';
		this.subText = 'ukraine';
		console.log('Установлен язык озвучки и субтитров ' + this.sound)
	}
	soundEn() {
		this.sound = 'english';
		this.subText = 'english';
		console.log('Установлен язык озвучки и субтитров ' + this.sound)
	}
	getFilm(){
		return this.film;
	}
	getSound(){
		return this.sound;
	}
	getSubtext(){
		return this.subText;
	}
	getAll() {
		alert("Фильм: " + this.getFilm() +"\nЯзык озвучки: " + this.getSound() +"\nЯзык субтитров: " + this.getSubtext());
	}
}

const s = new Main;

const listFilm = ['Game Of Throne', 'legend of avatar'];
const listLeng = ['uk', 'en'];
s.setfilm(listFilm[prompt('Выберете фильм:\n'+listFilm.map((a,b) => b + " | " + a).join('\n'))]);
s.setSound(listLeng[prompt('Укажите язык озвучки: \n'+listLeng.map((a,b) => b + " | " + a).join('\n'))]);
s.getAll();
s.setSound(listLeng[prompt('Укажите язык озвучки: \n'+listLeng.map((a,b) => b + " | " + a).join('\n'))]);
s.getAll();
