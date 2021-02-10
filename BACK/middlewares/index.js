const isUser = require("./isUser");
const servicioExist = require("./servicioExist");
const canEdit = require("./canEdit");
const canDeleteService = require("./canDeleteService");
const canDeleteUser = require("./canDeleteUser");
const canDeleteComentar = require("./canDeleteComentar");
const canEditAmin = require("./canEditAdmin");
const cannotAdmin = require("./cannotAdmin");
const userExists = require("./userExists");
const comentarioExists = require("./comentarioExists");
module.exports = {
    isUser,
    userExists,
    servicioExist,
    canEdit,
    canEditAmin,
    canDeleteService,
    canDeleteUser,
    canDeleteComentar,
    cannotAdmin,
    comentarioExists
}