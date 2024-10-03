document.addEventListener("DOMContentLoaded", function () {
    const tabc = document.querySelector(".about-tabs");
    const aboutsec = document.querySelector(".about-section");

    tabc.addEventListener("click", (e) => {
        if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
            // Remove 'active' class from the currently active tab if exists
            const activeTab = tabc.querySelector(".tab-item.active");
            if (activeTab) {
                activeTab.classList.remove("active");
            }

            // Add 'active' class to the clicked tab
            e.target.classList.add("active");

            // Hide the currently active content if exists
            const activeContent = aboutsec.querySelector(".tab-content.active");
            if (activeContent) {
                activeContent.classList.remove("active");
            }

            // Show the corresponding content based on the clicked tab
            const target = e.target.getAttribute("data-target");
            const newActiveContent = aboutsec.querySelector(target);
            if (newActiveContent) {
                newActiveContent.classList.add("active");
            }
        }
    });
});
/*--------portfolio item detail popup---------*/
document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
        togglepropop();
    }
})
function togglepropop(){
    document.querySelector(".portfolio-popup").classList.toggle("open")
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out")
}
document.querySelector(".pp-class").addEventListener("click",togglepropop)