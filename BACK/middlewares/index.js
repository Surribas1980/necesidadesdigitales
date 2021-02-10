const isUser = require("./isUser");
const servicioExist = require("./servicioExist");
const canEdit = require("./canEdit");
const canDeleteService = require("./canDeleteService");
const canDeleteUser = require("./canDeleteUser");
const canDeleteComentar = require("./canDeleteComentar");
const canEditAmin = require("./canEditAdmin");
module.exports = {
    isUser,
    servicioExist,
    canEdit,
    canEditAmin,
    canDeleteService,
    canDeleteUser,
    canDeleteComentar
}