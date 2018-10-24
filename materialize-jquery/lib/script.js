
$(document).ready(function () {

    $('.modal').modal();
    $('select').formSelect();

    $('#item-novo').click(function () {
        M.Modal.getInstance($('#item-modal-adicionar')).open();
    });

    $('#item-add').submit(function (e) {
        e.preventDefault();
        M.toast({ html: 'Adicionado <i class="material-icons right">check_box</i>' });
    });

    $(document).on('click', '#alterar', function () {
        M.Modal.getInstance($('#item-modal-alterar')).open();
    });

    $('#item-alt').submit(function (e) {
        e.preventDefault();
        M.Modal.getInstance($('#item-modal-alterar')).close();
        M.toast({ html: 'Alterado <i class="material-icons right">check_box</i>' });
    });

    $(document).on('click', '#excluir', function () {
        M.Modal.getInstance($('#item-modal-excluir')).open();
        $('#item-deletar').text('Deseja realmente excluir o item?');
    });

    $('#item_del').click(function (e) {
        M.toast({ html: 'Excluído <i class="material-icons right">clear</i>' });
        M.Modal.getInstance($('#item-modal-excluir')).close();
    });

    $('#item-atualizar').click(function (e) {
        M.toast({ html: 'Lista atualizada <i class="material-icons right">check</i>' });
    });

});
