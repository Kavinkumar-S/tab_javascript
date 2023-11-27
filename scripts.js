let tab_button = document.querySelectorAll(".tab");
    console.log("tab_button",tab_button);
    tab_button.forEach((ele,index)=> {
        ele.addEventListener("click",
        ()=>{
            console.log("index",index);
            let active_tab= document.querySelector(".tab-active")
            console.log("active_tab",active_tab);
            active_tab.classList.remove("tab-active");
            console.log("ele",ele);
            ele.classList.add("tab-active")
            let active_tab_content = document.querySelector(".tab-content-active").classList.remove("tab-content-active")
            console.log("active_tab_content",active_tab_content)
            let show_tab_content = document.querySelectorAll(".tab-content")
            console.log("show_tab_content",show_tab_content);
            show_tab_content[index].classList.add("tab-content-active")
        
        }
    )
    
    })
