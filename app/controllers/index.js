module.exports.index = function(application, req, res){
    res.render('index', {validacao: {}});
};

module.exports.autenticar = function (application, req, res) {
    var dadosForm = req.body;

    req.assert('usuario', "O usuario precisa ter entre 3 a 15 caracteres").notEmpty();
    req.assert('senha', "A senha precisa ser preenchida").notEmpty();

    var erros = req.validationErrors();

    if (erros){
        res.render('index', {validacao: erros});
        return
    }
    res.send
}