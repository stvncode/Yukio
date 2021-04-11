export const ofTypeForTag = <Tag extends string>(_tag: Tag) => <X extends { [k in Tag]: string }>(
    _t: X[Tag]
): { [k in X[Tag]]: X } => ({ [_t]: (undefined as any) as X } as { [k in X[Tag]]: X })