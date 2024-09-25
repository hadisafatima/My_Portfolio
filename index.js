vNavTab = document.getElementById("vNavTabs") ;

function options(){
    if(vNavTab.classList.contains("d-none")){
        vNavTab.classList.remove("d-none") ;
        vNavTab.classList.add("d-flex") ;
        console.log("If Working!?")
    }else{
        vNavTab.classList.remove("d-flex") ;
        vNavTab.classList.add("d-none") ;
        console.log("Else Working!?");
    }
}

const tabs = document.querySelectorAll("#hNavTabs .nav-tabs .nav-item .nav-link") ;

// using Arrow Function for changing horizontal Tabs Styles when clicked
const changeTabsColors = (element) => {
    tabs.forEach(tab => {
      tab.classList.remove("active") ;
      tab.classList.add("unactive")
    });

    element.classList.add("active");
}