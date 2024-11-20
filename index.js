
var tokenCaptcha;
var scriptCaptcha = document.createElement('script');
scriptCaptcha.setAttribute('src', 'https://www.google.com/recaptcha/api.js?render=6LcCMl4qAAAAAMLgG-uhh5lRFswvMEDzIlxG1IOC');
document.head.appendChild(scriptCaptcha);

// Setup uuid as device_key
var localKeyId = localStorage.getItem('deviceId');
if (localKeyId == null) {
    localKeyId = crypto.randomUUID();
    localStorage.setItem('deviceId', localKeyId);
}
var label, len, countryCode = '';
if (document.getElementsByTagName('body').item(0).getAttribute('data-post') && JSON.parse(document.getElementsByTagName('body').item(0).getAttribute('data-post')).portalFacts) {
    JSON.parse(JSON.parse(document.getElementsByTagName('body').item(0).getAttribute('data-post')).portalFacts).forEach(function (item) {
        if (item.key === 'countryCode') {
            countryCode = item.value;
            if (localStorage.getItem('countryCode') == null) {
                localStorage.setItem('countryCode', countryCode);
            } else {
                if (localStorage.getItem('countryCode') !== countryCode) {
                    localStorage.setItem('countryCode', countryCode);
                }
            }
        }
        if (item.key === 'language') {
            len = item.value;
            localStorage.setItem('language', item.value);
        }
    });
} else {
    len = localStorage.getItem('language');
    countryCode = localStorage.getItem('countryCode');
}
var language = document.getElementsByClassName("menu-title-underline")[0].innerHTML;
link = 'https://www.vietnamairlines.com/' + countryCode + '/' + len.split('-')[0] + '/legal/privacy-policy';
switch (language) {
    case "日本語":
        label = 'プラ <a href="' + link + '" target="_blank">イバシーポリシー</a> に記載される広告およびマーケティングに関する情報（ベトナム航空およびベトナム航空のパートナーに関する製品およびサービスに関連するお知らせ、ニュースレター、プロモーション、その他のオファーなど）を電子メールで受け取ることに同意します。';
        break;
    case "English":
        if (countryCode.toUpperCase() == 'VN' || localStorage.getItem('countryCode') == 'VN') {
            label = 'I accept Marketing communications as detailed in the <a href="' + link + '" target="_blank"> Privacy Policy</a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.). Estimated frequency: 02 emails per week.';
        } else {
            label = 'I accept Marketing communications as detailed in the <a href="' + link + '" target="_blank"> Privacy Policy</a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.)';
        }
        break;
    case "한국어":
        label = '개인정보<a href="' + link + '" target="_blank">보호정책</a>에서 구체적으로 설명된 대로 이메일을 통해 베트남항공 및 베트남항공 파트너의 제품 및 서비스에 관련 공지사항, 뉴스레터, 프로모션, 기타 혜택 등 광고 및 마케팅 정보를 수신하는 데 동의합니다.';
        break;
    case "简体中文":
        label = '我同意通过电子邮件接收<a href="' + link + '" target="_blank">隐私政策</a>中详述的广告和营销信息（例如公告、时事通讯、促销、与越南航空产品和服务以及越南航空合作伙伴相关的其他优惠）。'
        break;
    case "繁體中文":
        label = '我同意透過電子郵件接收<a href="' + link + '" target="_blank">隱私權政</a>策中詳述的廣告和行銷訊息（例如公告、電子報、促銷、與越南航空產品和服務以及越南航空合作夥伴相關的其他優惠）。'
        break;
    case "Deutsch":
        label = 'Ich bin damit einverstanden, E-Mails gemäß den <a href="' + link + '" target="_blank">Datenschutzbestimmungen zu</a> Werbeinformationen zu erhalten. (z. B. Ankündigungen, Newsletter, Werbeaktionen und andere Angebote im Zusammenhang mit Produkten und Dienstleistungen von Vietnam Airlines und Partnern von Vietnam Airlines).';
        break;
    case "Русский":
        label = 'Я согласен получать рекламную и маркетинговую информацию по электронной почте, как указано в <a href="' + link + '" target="_blank">Политике конфиденциальности</a> (например, объявления, информационные бюллетени, рекламные акции, другие предложения, связанные с продуктами и услугами Vietnam Airlines и партнерами Vietnam Airlines).';
        break;
    case "Français":
        label = 'J\'accepte de recevoir des informations publicitaires et marketing par e-mail, telles que décrites dans la <a href="' + link + '" target="_blank">Politique de confidentialité</a> (notamment les notifications, newsletters, promotions, et autres offres concernant les produits et services de Vietnam Airlines et de ses partenaires).';
        break;
    default:
        if (countryCode.toUpperCase() == 'VN' || localStorage.getItem('countryCode').toUpperCase() == 'VN') {
            label = 'Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="' + link + '" target="_blank">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines). Dự kiến tần suất nhận khoảng 02 email/tuần.'
        } else {
            label = 'Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="' + link + '" target="_blank">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines)';
        }
        break;
}

setTimeout(function() {
	var checkbox = document.querySelector('mat-checkbox').cloneNode(true);
	checkbox.setAttribute('id', 'gdprConsentAds');
	checkbox.firstChild.setAttribute('for', 'gdprConsentAds-input');
	checkbox.querySelector('input').setAttribute('id', 'gdprConsentAds-input');
    checkbox.querySelector('input').setAttribute('tabindex', '1');
    // checkbox.querySelector('input').setAttribute('checked', false);
    checkbox.querySelector('mat-label span').innerHTML = label;
    var appendingNode = document.getElementById("gdprConsent") ? document.getElementById("gdprConsent").parentElement : null;
    if (appendingNode != null) {
        appendingNode.appendChild(checkbox);
        var myCheckbox = document.getElementById("gdprConsentAds-input");
        myCheckbox.setAttribute('checked', false),
            callback = function (e, n) {
                for (var nKey in e) {
                    if (e.hasOwnProperty(nKey) && e[nKey].removedNodes.length > 0) {
                        language = document.getElementsByClassName("menu-title-underline")[0].innerHTML;
                        switch (language) {
                            case "日本語":
                                len = 'ja';
                                label = 'プラ <a href="' + link + '" target="_blank">イバシーポリシー</a> に記載される広告およびマーケティングに関する情報（ベトナム航空およびベトナム航空のパートナーに関する製品およびサービスに関連するお知らせ、ニュースレター、プロモーション、その他のオファーなど）を電子メールで受け取ることに同意します。';
                                break;
                            case "English":
                                len = 'en';
                                if (countryCode.toUpperCase() == 'VN' || localStorage.getItem('countryCode') == 'VN') {
                                    label = 'I accept Marketing communications as detailed in the <a href="' + link + '" target="_blank"> Privacy Policy </a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.). Estimated frequency: 02 emails per week.';
                                } else {
                                    label = 'I accept Marketing communications as detailed in the <a href="' + link + '" target="_blank"> Privacy Policy </a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.)';
                                }
                                break;
                            case "한국어":
                                label = '개인정보<a href="' + link + '" target="_blank">보호정책</a>에서 구체적으로 설명된 대로 이메일을 통해 베트남항공 및 베트남항공 파트너의 제품 및 서비스에 관련 공지사항, 뉴스레터, 프로모션, 기타 혜택 등 광고 및 마케팅 정보를 수신하는 데 동 의합니다.';
                                len = 'ko'
                                break;
                            case "简体中文":
                                label = '我同意通过电子邮件接收<a href="' + link + '" target="_blank">隐私政策</a>中详述的广告和营销信息（例如公告、时事通讯、促销、与越南航空产品和服务以及越南航空合作伙伴相关的其他优惠）。'
                                len = 'zh'
                                break;
                            case "繁體中文":
                                len = 'zh-tw'
                                label = '我同意透過電子郵件接收<a href="' + link + '" target="_blank">隱私權政</a>策中詳述的廣告和行銷訊息（例如公告、電子報、促銷、與越南航空產品和服務以及越南航空合作夥伴相關的其他優惠）。'
                                break;
                            case "Deutsch":
                                label = 'Ich bin damit einverstanden, E-Mails gemäß den <a href="' + link + '" target="_blank">Datenschutzbestimmungen zu</a> Werbeinformationen zu erhalten. (z. B. Ankündigungen, Newsletter, Werbeaktionen und andere Angebote im Zusammenhang mit Produkten und Dienstleistungen von Vietnam Airlines und Partnern von Vietnam Airlines).';
                                len = 'de'
                                break;
                            case "Русский":
                                len = 'ru'
                                label = 'Я согласен получать рекламную и маркетинговую информацию по электронной почте, как указано в <a href="' + link + '" target="_blank">Политике конфиденциальности</a> (например, объявления, информационные бюллетени, рекламные акции, другие предложения, связанные с продуктами и услугами Vietnam Airlines и партнерами Vietnam Airlines).';
                                break;
                            case "Français":
                                len = 'fr'
                                label = 'J\'accepte de recevoir des informations publicitaires et marketing par e-mail, telles que décrites dans la <a href="' + link + '" target="_blank">Politique de confidentialité</a> (notamment les notifications, newsletters, promotions, et autres offres concernant les produits et services de Vietnam Airlines et de ses partenaires).';
                                break;
                            default:
                                len = 'vi'
                                if (countryCode.toUpperCase() == 'VN' || localStorage.getItem('countryCode').toUpperCase() == 'VN') {
                                    label = 'Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="' + link + '" target="_blank">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines). Dự kiến tần suất nhận khoảng 02 email/tuần.'
                                } else {
                                    label = 'Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="' + link + '" target="_blank">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines)';
                                }
                                break;
                        }
                        checkbox.querySelector('mat-label span').innerHTML = label;
                    }
                }
            },
            observer = new MutationObserver(callback);
        observer.observe(document.getElementById("gdprConsent").lastChild.lastChild.lastChild.firstChild, {
            attributes: !0,
            childList: !0,
            subtree: !0
        });
        var click = 0;
        myCheckbox.addEventListener('click', function () {
            checkbox.className = '';
            // console.log(myCheckbox.checked)
            if (click == 0) {
                myCheckbox.setAttribute('checked', true);
                checkbox.classList.add('mat-checkbox', 'traveler-consent-checkbox', 'ng-star-inserted' ,'ng-dirty', 'ng-touched', 'cdk-focused' ,'cdk-mouse-focused', 'mat-accent', 'mat-checkbox-checked', 'ng-valid')
                click++;
            } else {
                if (myCheckbox.checked == true) {
                    myCheckbox.setAttribute('checked', false);
                    // checkbox.className += ' mat-checkbox traveler-consent-checkbox ng-star-inserted ng-dirty ng-touched mat-warn ng-invalid';
                    checkbox.classList.add('mat-checkbox', 'traveler-consent-checkbox', 'ng-star-inserted' ,'ng-dirty', 'ng-touched' ,'mat-warn' ,'ng-invalid');
                } else {
                    myCheckbox.setAttribute('checked', true);
                    checkbox.classList.add('mat-checkbox', 'traveler-consent-checkbox', 'ng-star-inserted' ,'ng-dirty', 'ng-touched', 'cdk-focused' ,'cdk-mouse-focused', 'mat-accent', 'mat-checkbox-checked', 'ng-valid')
                }
            }
            
            
        });

        var buttons = document.querySelector('button.mat-focus-indicator.nextBtn.mat-flat-button.mat-button-base.ng-star-inserted');
		//document.querySelector(".nextBtn.mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-unthemed.mat-mdc-button-base.ng-star-inserted")
		if (buttons != null) {
			buttons.addEventListener("click", function () {
				var e = [],
					n = [],
					t = 0,
					a = "Refx",
					c = "Web",
					i = document.querySelectorAll("refx-contact-info-email-item-pres");
				i.forEach(function (nItem) {
					if (nItem.querySelector("input").value != null) {
						e.push(nItem.querySelector("input").value);
					}
				});
				if (e.length > 0) e = e.join(",");
				var l = document.querySelectorAll("refx-contact-info-phone-item-pres");
				l.forEach(function (eItem) {
					var t = eItem.querySelectorAll("input");
					if (t[0].value != null && t[1].value != null) {
						n.push(t[0].value + t[1].value);
					}
				});
				if (n.length > 0) n = n.join(",");
				document.querySelector("#gdprConsentAds-input").checked ? t = 1 : t = 0;
				var lastName = document.querySelector("input[id$='PersonalInfolastName']").value;
				var firstName = document.querySelector("input[id$='PersonalInfofirstName']").value;
				grecaptcha.ready(function () {
					grecaptcha.execute('6LcCMl4qAAAAAMLgG-uhh5lRFswvMEDzIlxG1IOC', { action: 'submit' }).then(function (token) {
						// Append the reCAPTCHA token to the form data
						var data = {};
						data['TOKEN'] = token;
						data['SOURCE'] = a;
						data['PLATFORM'] = c;
						data['SUB'] = t;
						data['EMAIL'] = e;
						data['PHONE'] = n;
						data['LAST-NAME'] = lastName;
						data['FIRST-NAME'] = firstName;
						data['VENDOR'] = 'GMS';
						data['LANGUAGE'] = len;
						data['COUNTRY'] = countryCode;
						data['DEVICE-ID'] = localKeyId;
						data['GA-ID'] = gaGlobal ? gaGlobal.vid : '';
		
						// Call your server API to submit the form data
						fetch('https://mssf.vietnamairlines.com:9000/consent-refx', {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify(data)
						}).then(function (response) {
							if (response.ok) {
								console.log('Form submitted successfully.');
								// Optionally, redirect or show a success message
							} else {
								console.error('Error submitting the form.');
							}
						}).catch(function (error) {
							console.error('Request failed:', error);
						});
					});
				});
			})
		}
        
    }
}, 1500);

