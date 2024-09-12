var language = document.getElementsByClassName('menu-title-underline')[0].innerHTML;
var label;
switch (language) {
    case '日本語':
        label = '私は、プライバシーポリシーに詳述されているお知らせやニュースレター、プロモーション、ベトナム航空および当社のパートナーによる当社の製品・サービスに関するオファーなどのマーケティングコミュニケーションに同意します。';
        break;
    case "English":
        label = 'I accept Marketing communications as detailed in the Privacy Policy (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.)';
        break;
    case "한국어":
        label = '개인 정보 보호 정책에 자세히 설명된 마케팅 커뮤니케이션(예: 알림, 뉴스레터, 프로모션, 베트남 항공 및 협력사 제품과 서비스에 관한 기타 제안 등)을 수락합니다';
        break;
    case "简体中文":
        label = '我接受隐私政策中详细说明的营销沟通（诸如通知，通讯，促销，其他与越南航空以及我们合作伙伴有关我们产品和服务的其他优惠）';
        break;
    case "繁體中文":
        label = '我瞭解並同意接受越南航空隱私政策 （願意收到來自越南航空以及相關合作夥伴所提供之最新優   惠活動、電子報、票價促銷等產品服務資訊）';
        break;
    case "Deutsch":
        label = "Ich willige ein, die in den Datenschutzrichtlinen beschriebenen Mitteilungen (wie Anzeigen, Newsletter, Werbung und Angebote in Verbindung mit den Produkten und Dienstleistungen von Vietnam Airlines und deren Partnern) zu erhalten";
        break;
    case "Русский":
        label = "Я согласен принимать Рекламные информационные материалы, в соответствии политикой конфиденциальности (например, уведомления, новостная рассылка, промо акции, другие предложения связанные с продуктами и услугами от Vietnam Airlines и партнеров.)";
        break;
    case "Français":
        label = "J'accepte les communications marketing telles que détaillées dans la politique de confidentialité (telles que les notifications, les bulletins d'information, les promotions, les autres offres en relation avec les produits et services de Vietnam Airlines et ses partenaires.)";
        break;
    default:
        label = 'Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="https://www.vietnamairlines.com/nz/en/legal/privacy-policy">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines)';
        break;
}

const checkbox = document.createElement('mat-checkbox');
checkbox.setAttribute('formcontrolname', 'gdprConsent');
checkbox.setAttribute('class', 'mat-mdc-checkbox traveler-consent-checkbox mat-warn ng-untouched ng-pristine ng-invalid ng-star-inserted');
checkbox.setAttribute('aria-required', true);
checkbox.setAttribute('id', 'gdprConsentAds')
checkbox.innerHTML = `
    <div mat-internal-form-field="" class="mdc-form-field mat-internal-form-field">
            <div class="mdc-checkbox">
                <div class="mat-mdc-checkbox-touch-target">
                </div>
                <input 
                    type="checkbox" 
                    class="mdc-checkbox__native-control" 
                    id="gdprConsentAds-input" tabindex="0" />
                <div class="mdc-checkbox__ripple"></div>
                <div class="mdc-checkbox__background">
                    <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" class="mdc-checkbox__checkmark">
                        <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" class="mdc-checkbox__checkmark-path"></path>
                    </svg>
                <div class="mdc-checkbox__mixedmark"></div>
            </div>
            <div mat-ripple="" class="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator"></div>
        </div>
        <label class="mdc-label" for="gdprConsentAds-input">
            <mat-label class="traveler-consent-label" for="gdprConsent">
                <span>
                    ${label}
                </span>
            </mat-label>
        </label>
        </div>`;
const appendingNode = document.getElementById('gdprConsent').parentElement;
appendingNode.appendChild(checkbox);

const myCheckbox = document.getElementById('gdprConsentAds-input');
myCheckbox.addEventListener('change', () => {
    if (myCheckbox.checked) {
        checkbox.setAttribute('class', 'mat-mdc-checkbox traveler-consent-checkbox ng-star-inserted ng-dirty ng-touched mat-accent mat-mdc-checkbox-checked ng-valid');
        myCheckbox.setAttribute('class', 'mdc-checkbox__native-control mdc-checkbox--selected')
    } else {
        checkbox.setAttribute('class', 'mat-mdc-checkbox traveler-consent-checkbox ng-star-inserted ng-dirty ng-touched checkbox-error-state mat-warn ng-invalid');
        myCheckbox.setAttribute('class', 'mdc-checkbox__native-control')
    }
    
});

const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.removedNodes.length > 0) {
            //change to the language
            language = document.getElementsByClassName('menu-title-underline')[0].innerHTML;
            switch (language) {
                case '日本語':
                    label = '私は、プライバシーポリシーに詳述されているお知らせやニュースレター、プロモーション、ベトナム航空および当社のパートナーによる当社の製品・サービスに関するオファーなどのマーケティングコミュニケーションに同意します。';
                    break;
                case "English":
                    label = 'I accept Marketing communications as detailed in the <a href="https://www.vietnamairlines.com/nz/en/legal/privacy-policy">Privacy Policy</a> (such as notifications, newsletters, promotions, other offers in connection with our product and services from Vietnam Airlines and our partners.)';
                    break;
                case "한국어":
                    label = '개인 정보 보호 정책에 자세히 설명된 마케팅 커뮤니케이션(예: 알림, 뉴스레터, 프로모션, 베트남 항공 및 협력사 제품과 서비스에 관한 기타 제안 등)을 수락합니다';
                    break;
                case "简体中文":
                    label = '我接受隐私政策中详细说明的营销沟通（诸如通知，通讯，促销，其他与越南航空以及我们合作伙伴有关我们产品和服务的其他优惠）';
                    break;
                case "繁體中文":
                    label = '我瞭解並同意接受越南航空隱私政策 （願意收到來自越南航空以及相關合作夥伴所提供之最新優   惠活動、電子報、票價促銷等產品服務資訊）';
                    break;
                case "Deutsch":
                    label = "Ich willige ein, die in den Datenschutzrichtlinen beschriebenen Mitteilungen (wie Anzeigen, Newsletter, Werbung und Angebote in Verbindung mit den Produkten und Dienstleistungen von Vietnam Airlines und deren Partnern) zu erhalten";
                    break;
                case "Русский":
                    label = "Я согласен принимать Рекламные информационные материалы, в соответствии политикой конфиденциальности (например, уведомления, новостная рассылка, промо акции, другие предложения связанные с продуктами и услугами от Vietnam Airlines и партнеров.)";
                    break;
                case "Français":
                    label = "J'accepte les communications marketing telles que détaillées dans la politique de confidentialité (telles que les notifications, les bulletins d'information, les promotions, les autres offres en relation avec les produits et services de Vietnam Airlines et ses partenaires.)";
                    break;
                default:
                    label = 'Tôi đồng ý nhận các thông tin quảng cáo, tiếp thị qua email được nêu chi tiết trong <a href="https://www.vietnamairlines.com/nz/en/legal/privacy-policy">Chính sách bảo mật</a> (như thông báo, bản tin, khuyến mãi, các ưu đãi khác liên quan đến sản phẩm và dịch vụ của Vietnam Airlines và các đối tác của Vietnam Airlines)';
                    break;
            }
            checkbox.innerHTML = `
                <div mat-internal-form-field="" class="mdc-form-field mat-internal-form-field">
                        <div class="mdc-checkbox">
                            <div class="mat-mdc-checkbox-touch-target">
                            </div>
                            <input 
                                type="checkbox" 
                                class="mdc-checkbox__native-control" 
                                id="gdprConsentAds-input" tabindex="0" />
                            <div class="mdc-checkbox__ripple"></div>
                            <div class="mdc-checkbox__background">
                                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" class="mdc-checkbox__checkmark">
                                    <path fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59" class="mdc-checkbox__checkmark-path"></path>
                                </svg>
                            <div class="mdc-checkbox__mixedmark"></div>
                        </div>
                        <div mat-ripple="" class="mat-ripple mat-mdc-checkbox-ripple mat-mdc-focus-indicator"></div>
                    </div>
                    <label class="mdc-label" for="gdprConsentAds-input">
                        <mat-label class="traveler-consent-label" for="gdprConsent">
                            <span>
                                ${label}
                            </span>
                        </mat-label>
                    </label>
                    </div>`;
        }
    }
  };


const observer = new MutationObserver(callback);
observer.observe(document.getElementById('gdprConsent').lastChild.lastChild.lastChild.firstChild , { attributes: true, childList: true, subtree: true });

// const getToken = async () => {
//     const basicKey = 'VGpfNzF1NGFmQnVJMzZyZ1c3eW5IVTBlcDE0YTpmVXNoVl9yMU51dk1oRkc4V2prUVdnc2JtWFFh'; // change key to match env
//     try {
//         const token = await fetch("https://10.1.10.169:4443/token", {
//             method: "POST",
//             headers: {
//                 Authorization: `Basic ${basicKey}`,
//                 "Content-Type": "application/x-www-form-urlencoded"
//             },
//             body: {
//                 grant_type: 'client_credentials'
//             }
//         }).then((data) => {
//             console.log(data)
//         });
//         console.log(token);
        
//     } catch (error) {
//         console.log(error);
        
//     }

// }
// getToken();