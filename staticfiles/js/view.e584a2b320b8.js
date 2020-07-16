var buttonGrid = document.getElementById('button-view-grid');
var buttonList = document.getElementById('button-view-list');

buttonGrid.addEventListener('click', function (e) {
    buttonGrid.classList.add('active');
    buttonList.classList.remove('active');
    updateView('grid_view');
});
buttonList.addEventListener('click', function (e) {
    buttonGrid.classList.remove('active');
    buttonList.classList.add('active');
    updateView('list_view');
});

function updateView(viewType) {
    view['viewType'] = viewType;
    document.cookie = 'view=' + JSON.stringify(view) + ";domain=;path=/";
    location.reload();
}