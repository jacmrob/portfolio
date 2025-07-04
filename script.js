export const renderHeader = (currentPage) => {
    fetch("header.html")
    .then((response) => response.text())
    .then((html) => {
        document.getElementById("header-container").innerHTML = html;

        // Set active link based on data-page attribute
        const links = document.querySelectorAll(".headerLink");
        // biome-ignore lint/complexity/noForEach: <explanation>
        links.forEach((link) => {
        if (link.id === currentPage) {
            link.setAttribute("aria-current", "page");
            link.classList.add("active");
        }
        });
    });
}
