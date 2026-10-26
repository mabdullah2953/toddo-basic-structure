window.getRandomId = ()=>Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);

window.isVaildEmail= email=> /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)
