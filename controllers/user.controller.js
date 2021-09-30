const { response } = require('express');

const usuariosGet = (req, res = response) => {
  res.json({
    msg: 'get API desde controllers'
  });
}

const usuariosPut = (req, res = response) => {
  res.json({
    msg: 'put API desde controllers'
  });
}

const usuariosPost = (req, res = response) => {
  res.status(201).json({
    msg: 'post API'
  });
}

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: 'delete API'
  });
}

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: 'patch API'
  });
}


module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
}
