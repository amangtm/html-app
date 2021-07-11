window.onload= function(){

    // let btns=["btn1","btn2","btn3"]
    // btns.map((id) => {
    //     const btn=document.getElementById(id);
    //     btn.onclick=function (event){
    //         btn.dataset.btnActive='true';
    //         const contentId=btn.textContent;
    //         document.getElementById(contentId).dataset.contentActive='true';
    //         btns.map(btn1 =>{
    //             if(btn1!==btn){
    //                 btn1.dataset.btnActive='false';
    //                 const contentId1=btn1.textContent;
    //                 document.getElementById(contentId1).dataset.contentActive='false';
    //             }
    //         })
    //        // console.log(contentId,`Button ${activeButtonId} clicked`)
    //     }

    // })
    const btnEle1=document.getElementById('btn1');
    const btnEle2=document.getElementById('btn2');
    const btnEle3=document.getElementById('btn3');
    btnEle1.addEventListener('click',function (event){
        const contentId=btnEle1.textContent;
        btnEle1.style.borderBottom="2px solid red" ;
        document.getElementById(contentId).style.display='block';
        document.getElementById(contentId).style.display='block';
        document.getElementById(contentId).style.display='block';
    })
    btnEle2.addEventListener('click',function (event){
        const contentId=btnEle2.textContent;
        btnEle2.style.borderBottom="2px solid red" ;
        document.getElementById(contentId).style.display='block';
    })
    btnEle3.addEventListener('click',function (event){
        const contentId=btnEle1.textContent;
        btnEle3.style.borderBottom="2px solid red" ;
        document.getElementById(contentId).style.display='block';
    })
}