$(document).ready(function(){
$('#m6').click(function(){
	if($('#m6 ').attr('src')=="images/eng.png"){
		$('#m1').text('Home');
		$('#m2').text('Order a service');
		$('#m3').text('Perform the service');
		$('#m4').text('Requirements for remuneration');
		$('#m5').text('Contacts');
		$('#m6 ').attr('src',"images/ua.jpg");
		$('h1').text('Online service for placing orders for small services')
		$('#comp').text('Online service for placing orders for small services. Next generation service for creating service announcements. Users can either order a service (walk the dog, go to the store, dig up a garden, help clean up, etc.) or take up an assignment and receive a reward after completion.');
		$('#h3comp').text('About the company');
		$('#h3 b').text('Order a service');
		$('#dm a').text('Homemaker');
		$('#dm p').html("Plumber <br> Electrician <br> Joiner <br> Locksmith");
		$('#or a').text('Finishing works');
		$('#or p').html("Repair of apartments <br>Plastering works<br> Warming of rooms<br> Dismantling works");
		$('#kp a').text('Cleaning services');
		$('#kp p').html("Apartment cleaning <br> General cleaning <br> Cleaning after repair <br> Dry cleaning");
		$('#kur a').text('Courier services');
		$('#kur p').html("Courier delivery <br> Food delivery <br> Delivery of ready meals <br> Delivery of medicines");
		$('#rt a').text('Repair of equipment');
		$('#rt p').html("Repair of large household appliances<br> Repair of small household appliances <br>Repair of digital appliances<br> Repair of mobile phones");
		$('#pr a').text('Distribution of advertising');
		$('#pr p').html("Distribution of flyers <br> Posting ads <br> Advertising in mailboxes");
		$('#pp a').text('Domestic services');
		$('#pp p').html("Garden and garden <br> Housekeeping services <br> Seamstress services <br> Cook services");
		$('#pdt a').text('Services for animals');
		$('#pdt p').html("Cat care <br> Dog care <br> Hotel for animals <br> Bird care");
		$('#vp b').text("Perform the service")
		$('#vimogi b').text("Requirements for remuneration")
		$('#vv1').html("<img src='images/vinagoroda.png' alt='Вимоги для винагороди' class='rightimg'><img src='images/vinagoroda.png' alt='Вимоги для винагороди' class='leftimg'>The service publishes more than 500 orders in various categories every day. In addition to geo-dependent work (linked to a specific city). <br> In addition to orders that require special qualifications (services of an electrician, builder), there are many simple works: distribution of leaflets, courier delivery, cleaning of apartments, etc. <br> Thus, anyone can find a suitable job.");
		$('#vv2').text("Remuneration will be paid after early and quality work. A message will arrive on your mobile phone and the money will go to your bank card.");
		$('#kontakt b').text("Contacts");
		$('#c1').html("Petrov Petro Petrovich, an elderly but very young businessman with a lot of experience. Founder of an online service for placing orders for small services. Very creative and very flexible in ideas, easily picks up what the client needs. He worked in various fields of services, where he gained experience. Last year he opened his service.<br>Phone: +380 66 666 66666");
		$('#c2').html("Vasilieva Vasilisa Vasylivna, a young blue-eyed specialist of the online service for placing orders for small services. Very friendly and interesting girl with whom it is nice to have a dialogue. Is the right hand of Peter Petrovich, from this will answer any question concerning service and its services. Pick up and advise everything you need for the client. <br> Phone: +380 99 999 9999");
		$('#reklama').html('<img src="images/footereng.jpg" title="" />');
	}
	else{$('#m6').attr('src',"images/eng.png");
		$('#m1 ').text('Головна');
		$('#m2 ').text('Замовити послугу');
		$('#m3 ').text('Виконати послугу');
		$('#m4 ').text('Вимоги для винагороди');
		$('#m5 ').text('Контакти');
		$('h1').text('Онлайн сервіс розміщення замовлень на дрібні послуги')
		$('#comp').text('Онлайн сервіс розміщення замовлень на дрібні послуги. Сервіс нового покоління для створення оголошень про надання послуг. Користувачі можуть як замовити послугу (погуляти з собакою, сходити в магазин, скопати город, допомогти зробити прибирання і т.д.) так і взятися за доручення і отримати винагороду після виконання.')
		$('#h3comp').text('Про компанію')
		$('#h3 b').text('Замовити послугу')
		$('#dm a').text('Домашній майстер')
		$('#dm p').html("Сантехнік <br> Електрик <br> Столяр <br> Слюсар")
		$('#or a').text('Оздоблювальні роботи');
		$('#or p').html("Ремонт квартир<br>Штукатурні роботи<br>Утеплення приміщень<br>Демонтажні роботи");
		$('#kp a').text('Клінінгові послуги');
		$('#kp p').html("Прибирання квартир<br>Генеральне прибирання<br>Прибирання після ремонту<br>Хімчистка");
		$('#kur a').text('Кур\'єрські послуги');
		$('#kur p').html("Кур'єрська доставка<br>Доставка продуктів<br>Доставка готової їжі<br>Доставка ліків");
		$('#rt a').text('Ремонт техніки');
		$('#rt p').html("Ремонт великої побутової техніки<br>Ремонт дрібної побутової техніки<br>Ремонт цифрової техніки<br>Ремонт мобільних телефонів");
		$('#pr a').text('Поширення реклами');
		$('#pr p').html("Роздача флаєрів<br>Розклеювання оголошень<br>Реклама в поштові скриньки");
		$('#pp a').text('Побутові послуги');
		$('#pp p').html("Сад і город<br>Послуги домробітниці<br>Послуги швачки<br>Послуги кухаря");
		$('#pdt a').text('Послуги для тварин');
		$('#pdt p').html("Догляд за котами<br>Догляд за собаками<br>Готель для тварин<br>Догляд за птахами");
		$('#vp b').text("Виконати послугу")
		$('#vimogi b').text("Вимоги для винагороди")
		$('#vv1').html("<img src='images/vinagoroda.png' alt='Вимоги для винагороди' class='rightimg'><img src='images/vinagoroda.png' alt='Вимоги для винагороди' class='leftimg'>На сервісі щодня публікуються більше 500 замовлень у різних категоріях. Крім геозалежних робіт (з прив'язкою до конкретного міста).<br> Окрім замовлень, які потребують спеціальної кваліфікації (послуги електрика, будівельника), є багато простих робіт: роздача листівок, кур'єрська доставка, прибирання квартир тощо.<br> Таким чином, відповідну роботу може знайти будь-який бажаючий.");
		$('#vv2').text("Винагорода буде сплачена після завчасної та якісно виконаної роботи. Прийде повідомлення на мобільний телефон та гроші поступлять до банківської карти.");
		$('#kontakt b').text("Контакти");
		$('#c1').html("Петров Петро Петрович, літній, але дуже молодий в душі підприємець з великим стажем. Засновник онлайн сервісу розміщення замовлень на дрібні послуги. Дуже креативний і дуже гнучкий в ідеях, легко підбере, то що треба клієнтові. Працював в різних сферах послуг, де набрався досвіду. У минулому році відкрив свій сервіс.<br>Телефон: +380 66 666 66666");
		$('#c2').html("Васильєва Василиса Василівна, молода блакитноока спеціолістка онлайн сервісу розміщення замовлень на дрібні послуги. Дуже привітна і цікава дівчина з якою приємно вести діалог. Є правою рукою Петра Петровича, з цього відповість на будь-яке питання стосовно сервісу і його послуг. Підбере і порадить все необхідне, що потрібно для клієнта.<br>Телефон: +380 99 999 9999")
		$('#reklama').html('<img src="images/footer.jpg" title="" />');
}

});
$('#zp a').click(function(){
	let test= confirm(`Бажаєте замовити послугу: "${$(this).text()}"?`);
	if(test){
		
		let tel=prompt("Залиште свій мобільний телефон:");
		while(tel.replace (/\d/g, '').length){
		if (tel.replace (/\d/g, '').length) {alert ('Номер телефона повинен містити тільки цифри!');
	tel=prompt("Залиште свій мобільний телефон:");}

		}
		alert(`Замовлення послуги: "${$(this).text()}" прийнято. \n Чекайте дзвінок від оператора.`);
	}
})
$('#vik a').click(function(){
	let test= confirm(`Бажаєте виконати послугу: "${$(this).text()}"?`)
	if(test){
		let tel=prompt("Залиште свій мобільний телефон:");
		while(tel.replace (/\d/g, '').length){
		if (tel.replace (/\d/g, '').length) {alert ('Номер телефона повинен містити тільки цифри!');
	tel=prompt("Залиште свій мобільний телефон:");}

		}
		alert(`Чекайте дзвінок від оператора.`);
	}
})
$('#c1').hover(function(){
	$(this).css("opacity", "0.9");
}, function(){
	$(this).css("opacity", "0");
});
$('#c2').hover(function(){
	$(this).css("opacity", "0.9");
}, function(){
	$(this).css("opacity", "0");
});

});
