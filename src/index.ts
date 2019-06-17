import * as R from 'ramda';

const defaultArray: any = R.defaultTo([]);

export default ({idKey, parentIdKey, nameKey}) => {
  return R.pipe(
    R.map(v => R.mergeDeepLeft(v, {title: v[nameKey], key: v[idKey], value: v[idKey]})),
    R.applySpec({list: R.identity, idMaps: R.reduce((a, b) => R.mergeDeepLeft(a, {[b[idKey]]: b}), Object.create(null))}),
    ({list, idMaps}, node = []) => {
      const hasParent = R.compose(R.has(R.__, idMaps), R.prop(parentIdKey));
      const updateChildren = v => idMaps[v[parentIdKey]].children = R.append(v, defaultArray(idMaps[v[parentIdKey]].children));
      R.forEach(R.cond([
        [hasParent, updateChildren],
        [R.T, v => node[node.length] = v]
      ]))(list);
      return node;
    }
  );
};