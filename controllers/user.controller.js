const { response, request } = require("express");

const usuariosGet = (req, res = response) => {
  const params = req.query;
  res.json({
    msg: "get API desde controllers",
    params,
  });
};

const usuariosPut = (req, res = response) => {
  // const id = req.params.id;
  const { id } = req.params;

  res.json({
    msg: "put API desde controllers",
    id,
  });
};

const usuariosPost = (req, res = response) => {
  const body = req.body;

  res.status(201).json({
    msg: "post API",
    body,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msg: "patch API",
  });
};

module.exports = {
  usuariosGet,
  usuariosPut,
  usuariosPost,
  usuariosDelete,
  usuariosPatch,
};
