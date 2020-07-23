// import { pop } from "core-js/fn/array";

const popup = (btnPopup, popupWindow,  closePopupBtn, popupForm) => {

    const btnAction = document.querySelectorAll(btnPopup);
    const popup = document.querySelector(popupWindow);
    const closePopup = document.querySelector(closePopupBtn);
    const popupInner = document.querySelector(popupForm);

    const showPopup = () =>{
        btnAction.forEach(item => {
            item.addEventListener('click', ()=>{
                popup.style.display = "flex";
                document.body.style.overflow = 'hidden';
            });
        });
        console.log(popupInner);
    }
    const hiddenPopup = () => {
        closePopup.addEventListener('click', ()=>{
            popup.style.display = "none";
            document.body.style.overflow = '';
        });
        popup.addEventListener('click', (event)=>{
            if(event.target == popup){
                popup.style.display = "none";
                document.body.style.overflow = '';
            }
        });
    }


    showPopup();
    hiddenPopup();
};

export default popup;