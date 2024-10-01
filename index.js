//Setup uuid as device_key
var localKeyId = localStorage.getItem('deviceId');
if (localKeyId == null) {
    localKeyId = crypto.randomUUID();
    localStorage.setItem('deviceId', localKeyId);
}

var label, len, countryCode = '';
if (document.getElementsByTagName('body').item(0).getAttribute('data-post') && JSON.parse(document.getElementsByTagName('body').item(0).getAttribute('data-post')).portalFacts) {
    JSON.parse(JSON.parse(document.getElementsByTagName('body').item(0).getAttribute('data-post')).portalFacts).forEach((item) => {
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
            len = item.value
        }
    });
}
var language = document.getElementsByClassName("menu-title-underline")[0].innerHTML;
link = `https://www.vietnamairlines.com/${countryCode}/${len.split('-')[0]}/legal/privacy-policy`;
switch (language) {
    case "日本語":
        label = "私は、プライバシーポリシーに詳述されているお知らせやニュースレター、プロモーション、ベトナム航空および当社のパートナーによる当社の製品・サービスに関するオファーなどのマーケティングコミュニケーションに同意します。";
        break;
    case "English":
        if (countryCode.toUpperCase() == 'VN' || localStorage.getItem('countryCode') == 'VN') {
            label = `I accept Marketing communications as detailed in the <a href="${link}"> Privacy Policy </a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.). Estimated frequency: 02 emails per week.`;
        } else {
            label = `I accept Marketing communications as detailed in the <a href="${link}"> Privacy Policy </a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.)`;
        }
        break;
    case "한국어":
        label = "개인 정보 보호 정책에 자세히 설명된 마케팅 커뮤니케이션(예: 알림, 뉴스레터, 프로모션, 베트남 항공 및 협력사 제품과 서비스에 관한 기타 제안 등)을 수락합니다";
        break;
    case "简体中文":
        label = "我接受隐私政策中详细说明的营销沟通（诸如通知，通讯，促销，其他与越南航空以及我们合作伙伴有关我们产品和服务的其他优惠）";
        break;
    case "繁體中文":
        label = "我瞭解並同意接受越南航空隱私政策 （願意收到來自越南航空以及相關合作夥伴所提供之最新優   惠活動、電子報、票價促銷等產品服務資訊）";
        break;
    case "Deutsch":
        label =
            "Ich willige ein, die in den Datenschutzrichtlinen beschriebenen Mitteilungen (wie Anzeigen, Newsletter, Werbung und Angebote in Verbindung mit den Produkten und Dienstleistungen von Vietnam Airlines und deren Partnern) zu erhalten";
            break;
    case "Русский":
        label =
            "Я согласен принимать Рекламные информационные материалы, в соответствии политикой конфиденциальности (например, уведомления, новостная рассылка, промо акции, другие предложения связанные с продуктами и услугами от Vietnam Airlines и партнеров.)";
        break;
    case "Français":
        label =
            "J'accepte les communications marketing telles que détaillées dans la politique de confidentialité (telles que les notifications, les bulletins d'information, les promotions, les autres offres en relation avec les produits et services de Vietnam Airlines et ses partenaires.)";
        break;
    default:
        if (countryCode.toUpperCase() == 'VN' || localStorage.getItem('countryCode').toUpperCase() == 'VN') {
            label = `Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="${link}">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines). Dự kiến tần suất nhận khoảng 02 email/tuần.`
        } else {
            label =
            `Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="${link}">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines)`;
        }
        break;
}
var checkbox = document.createElement("mat-checkbox");
checkbox.setAttribute("formcontrolname", "gdprConsent"),
    checkbox.setAttribute("class", "mat-mdc-checkbox traveler-consent-checkbox mat-warn ng-untouched ng-pristine ng-invalid ng-star-inserted"),
    checkbox.setAttribute("aria-required", !0),
    checkbox.setAttribute("id", "gdprConsentAds"),
    (checkbox.innerHTML = `\n    <div mat-internal-form-field="" class="mdc-form-field mat-internal-form-field">\n            <div class="mdc-checkbox">\n                <div class="mat-mdc-checkbox-touch-target">\n                </div>\n                <input \n                    type="checkbox" \n                    class="mdc-checkbox__native-control" \n                    id="gdprConsentAds-input" tabindex="0" />\n                <div class="mdc-checkbox__ripple"></div>\n                <div class="mdc-checkbox__background">\n                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" class="mdc-checkbox__checkmark">\n                        <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" class="mdc-checkbox__checkmark-path"></path>\n                    </svg>\n                <div class="mdc-checkbox__mixedmark"></div>\n            </div>\n            <div mat-ripple="" class="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator"></div>\n        </div>\n        <label class="mdc-label" for="gdprConsentAds-input">\n            <mat-label class="traveler-consent-label" for="gdprConsent">\n                <span>\n                    ${label}\n                </span>\n            </mat-label>\n        </label>\n        </div>`);
var appendingNode = document.getElementById("gdprConsent") ? document.getElementById("gdprConsent").parentElement : null;
if (null != appendingNode) {
    appendingNode.appendChild(checkbox);
    var myCheckbox = document.getElementById("gdprConsentAds-input"),
        callback = (e, n) => {
            for (const n of e)
                if (n.removedNodes.length > 0) {
                    switch (((language = document.getElementsByClassName("menu-title-underline")[0].innerHTML), language)) {
                        case "日本語":
                            len = 'ja';
                            label = "私は、プライバシーポリシーに詳述されているお知らせやニュースレター、プロモーション、ベトナム航空および当社のパートナーによる当社の製品・サービスに関するオファーなどのマーケティングコミュニケーションに同意します。";
                            break;
                        case "English":
                            len = 'en';
                            if (countryCode.toUpperCase() == 'VN' || localStorage.getItem('countryCode') == 'VN') {
                                label = `I accept Marketing communications as detailed in the <a href="${link}"> Privacy Policy </a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.). Estimated frequency: 02 emails per week.`;
                            } else {
                                label = `I accept Marketing communications as detailed in the <a href="${link}"> Privacy Policy </a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.)`;
                            }
                            break;
                        case "한국어":
                            label = "개인 정보 보호 정책에 자세히 설명된 마케팅 커뮤니케이션(예: 알림, 뉴스레터, 프로모션, 베트남 항공 및 협력사 제품과 서비스에 관한 기타 제안 등)을 수락합니다";
                            len = 'ko'
                            break;
                        case "简体中文":
                            label = "我接受隐私政策中详细说明的营销沟通（诸如通知，通讯，促销，其他与越南航空以及我们合作伙伴有关我们产品和服务的其他优惠）";
                            len = 'zh'
                            break;
                        case "繁體中文":
                            len = 'zh-tw'
                            label = "我瞭解並同意接受越南航空隱私政策 （願意收到來自越南航空以及相關合作夥伴所提供之最新優   惠活動、電子報、票價促銷等產品服務資訊）";
                            break;
                        case "Deutsch":
                            label =
                                "Ich willige ein, die in den Datenschutzrichtlinen beschriebenen Mitteilungen (wie Anzeigen, Newsletter, Werbung und Angebote in Verbindung mit den Produkten und Dienstleistungen von Vietnam Airlines und deren Partnern) zu erhalten";
                            len = 'de'
                                break;
                        case "Русский":
                            len = 'ru'
                            label =
                                "Я согласен принимать Рекламные информационные материалы, в соответствии политикой конфиденциальности (например, уведомления, новостная рассылка, промо акции, другие предложения связанные с продуктами и услугами от Vietnam Airlines и партнеров.)";
                            break;
                        case "Français":
                            len = 'fr'
                            label =
                                "J'accepte les communications marketing telles que détaillées dans la politique de confidentialité (telles que les notifications, les bulletins d'information, les promotions, les autres offres en relation avec les produits et services de Vietnam Airlines et ses partenaires.)";
                            break;
                        default:
                            len = 'vi'
                            if (countryCode.toUpperCase() == 'VN' || localStorage.getItem('countryCode').toUpperCase() == 'VN') {
                                label = `Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="${link}">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines). Dự kiến tần suất nhận khoảng 02 email/tuần.`
                            } else {
                                label =
                                `Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="${link}">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines)`;
                            }
                            break;
                    }
                    checkbox.innerHTML = `\n                    <div mat-internal-form-field="" class="mdc-form-field mat-internal-form-field">\n                            <div class="mdc-checkbox">\n                                <div class="mat-mdc-checkbox-touch-target">\n                                </div>\n                                <input \n                                    type="checkbox" \n                                    class="mdc-checkbox__native-control" \n                                    id="gdprConsentAds-input" tabindex="0" />\n                                <div class="mdc-checkbox__ripple"></div>\n                                <div class="mdc-checkbox__background">\n                                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" class="mdc-checkbox__checkmark">\n                                        <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" class="mdc-checkbox__checkmark-path"></path>\n                                    </svg>\n                                <div class="mdc-checkbox__mixedmark"></div>\n                            </div>\n                            <div mat-ripple="" class="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator"></div>\n                        </div>\n                        <label class="mdc-label" for="gdprConsentAds-input">\n                            <mat-label class="traveler-consent-label" for="gdprConsent">\n                                <span>\n                                    ${label}\n                                </span>\n                            </mat-label>\n                        </label>\n                        </div>`;
                }
        },
        observer = new MutationObserver(callback);
    observer.observe(document.getElementById("gdprConsent").lastChild.lastChild.lastChild.firstChild, { attributes: !0, childList: !0, subtree: !0 }),
        myCheckbox.addEventListener("change", () => {
            myCheckbox.checked
                ? (checkbox.setAttribute("class", "mat-mdc-checkbox traveler-consent-checkbox ng-star-inserted ng-dirty ng-touched mat-accent mat-mdc-checkbox-checked ng-valid"),
                  myCheckbox.setAttribute("class", "mdc-checkbox__native-control mdc-checkbox--selected"))
                : (checkbox.setAttribute("class", "mat-mdc-checkbox traveler-consent-checkbox ng-star-inserted ng-dirty ng-touched checkbox-error-state mat-warn ng-invalid"),
                  myCheckbox.setAttribute("class", "mdc-checkbox__native-control"));
        }),
        document.querySelector(".nextBtn.mdc-button.mdc-button--unelevated.mat-mdc-unelevated-button.mat-unthemed.mat-mdc-button-base.ng-star-inserted").addEventListener("click", async () => {
            var e = [],
                n = [],
                t = 0,
                a = "Refx",
                c = "Web",
                i = document.querySelectorAll("refx-contact-info-email-item-pres");
            i.forEach((n) => {
                null != n.querySelector("input").value && e.push(n.querySelector("input").value);
            }),
                e.length > 0 && (e = e.join(","));
            var l = document.querySelectorAll("refx-contact-info-phone-item-pres");
            l.forEach((e) => {
                let t = e.querySelectorAll("input");
                null != t[0].value && null != t[1].value && n.push(`${t[0].value}${t[1].value}`);
            }),
                n.length > 0 && (n = n.join(",")),
                document.querySelector("#gdprConsentAds-input").checked ? t = 1 : t = 0,
                await fetch("https://mssf.vietnamairlines.com:4443/api/v1.0/consent", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Authorization: "Bearer d96d7592-156b-3d9c-aeea-3e111c2a2014" },
                    body: JSON.stringify({
                        SOURCE: a,
                        PLATFORM: c,
                        SUB: t,
                        EMAIL: e,
                        PHONE: n,
                        "LAST-NAME": document.querySelector("input[id$='PersonalInfolastName']").value,
                        "FIRST-NAME": document.querySelector("input[id$='PersonalInfofirstName']").value,
                        VENDOR: "GMS",
                        LANGUAGE: len,
                        COUNTRY: countryCode,
                        "DEVICE-ID": localKeyId,
                        "GA-ID": gaGlobal ? gaGlobal.vid : ''
                    }),
                });
        });
}
