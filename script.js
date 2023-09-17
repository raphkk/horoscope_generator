//Horoscope readings for each sign
const horoscopeReadings = {
  aries: "Today is a great day for new beginnings. Take charge of your goals and make things happen.",
  taurus: "You may face some challenges today, but stay focused and determined. Your efforts will pay off.",
  gemini: "Communication is key today. Express yourself clearly and listen to others to avoid misunderstandings.",
  cancer: "Focus on self-care today. Take some time for relaxation and reflection to rejuvenate your mind and body.",
  leo: "Some friends associated with a group you admire might take you to some kind of rally, Leo. This could be a lot of fun for you. You could make some new friends. You're naturally inclined toward humanitarian concerns, and these might be the focus of some animated discussions today. Take in all the information and consider it later. Right now your mind is overwhelmed!",
  virgo: "You're naturally a kind, compassionate person, Virgo. Today your feelings are likely to be focused not only on those close to you but also on all the world's population. A feeling of unity with the billions you've never met could overwhelm you now. You might want to write down your impressions so you can refer to them later. You might otherwise forget it all.",
  libra: "With today's planetary aspects, Libra, you're likely to feel a rush of love. This includes love for family, friends, partner, and all life forms. The reality of spiritual advancement through love is all around you. Your artistic sensibilities are very high, so you might want to write, draw, or paint something that captures your thoughts and feelings.",
  scorpio: "You're feeling especially loving and passionate, Scorpio, and likely to want to pursue a romantic encounter with the special person in your life. Money matters look positive, as your intuition regarding money management has been working well and is likely to continue. Your psychic and intuitive faculties are wide open and receptive. Don't be surprised by what you pick up today, even from strangers.",
  sagittarius: "Today is a great time to form or strengthen romantic relationships, Sagittarius. If you aren't involved, chances are you will meet someone. If you are, expect your relationship to develop a new spiritual bond. New friendships, particularly with people who share your interests, are on the horizon. The coming years will be a time when everyone will have to pull together. Today you get a head start.",
  capricon: "This is an ideal day to begin a creative venture, Capricorn. You've had many ideas and creative urges. Today it's time to choose one and take the first step to making your vision a reality. You will find that the form will change. This is no reason to be discouraged. It's part of the normal evolution of any work of art. The key here is to begin.",
  aquarius: "Your naturally loving nature gets a boost today, Aquarius. You could look especially attractive, so don't be surprised if you draw admiring looks from strangers. Romantic novels and movies could seem appealing now, but you're more interested in the real thing. If you can, try to schedule alone time with the special person in your life. You won't regret it! ",
  pisces: "Your energy might turn toward beautifying your home, Pisces. Perhaps you've decided to repaint or go in a completely new direction in your decorating taste. Posters or other souvenirs of foreign lands might also be especially appealing now. Expect someone to drop by and bring some interesting news that might get your mind going a thousand miles an hour.",
  // Add more horoscope readings for other signs
};


function generateHoroscope() {
  const signSelect = document.getElementById("sign-select");
  const selectedSign = signSelect.value;
  

  const horoscopeResult = document.getElementById("horoscope-result");
  horoscopeResult.innerText = horoscopeReadings[selectedSign];
}