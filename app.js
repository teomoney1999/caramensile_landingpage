function App(views) {
  views.forEach((view) => (document.body.innerHTML += view.call()));
}

export default App;