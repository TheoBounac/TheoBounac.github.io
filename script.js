// Accordéon natif HTML : plusieurs projets peuvent rester ouverts.
// Pour n'en laisser qu'un seul ouvert à la fois, décommentez le bloc ci-dessous.
/*
document.querySelectorAll(".project").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      document.querySelectorAll(".project").forEach((other) => {
        if (other !== item) other.open = false;
      });
    }
  });
});
*/
