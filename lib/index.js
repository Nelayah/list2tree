"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var R = require("ramda");
var defaultArray = R.defaultTo([]);
exports.default = (function (_a) {
    var idKey = _a.idKey, parentIdKey = _a.parentIdKey, nameKey = _a.nameKey;
    return R.pipe(R.map(function (v) { return R.mergeDeepLeft(v, { title: v[nameKey], key: v[idKey], value: v[idKey] }); }), R.applySpec({ list: R.identity, idMaps: R.reduce(function (a, b) {
            var _a;
            return R.mergeDeepLeft(a, (_a = {}, _a[b[idKey]] = b, _a));
        }, Object.create(null)) }), function (_a, node) {
        var list = _a.list, idMaps = _a.idMaps;
        if (node === void 0) { node = []; }
        var hasParent = R.compose(R.has(R.__, idMaps), R.prop(parentIdKey));
        var updateChildren = function (v) { return idMaps[v[parentIdKey]].children = R.append(v, defaultArray(idMaps[v[parentIdKey]].children)); };
        R.forEach(R.cond([
            [hasParent, updateChildren],
            [R.T, function (v) { return node[node.length] = v; }]
        ]))(list);
        return node;
    });
});
