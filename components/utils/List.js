const List = (props) => {
    const { items, render, colSm, colMd, textAlign, className } = props;
    const classes = `col-sm-${colSm || 12} col-md-${colMd || 6} text-${textAlign || 'center'} my-2`;

    return (
        <div className={className}>
            {items.map(item =>
                <article key={item.id} className={classes}>
                    {render(item)}
                </article>
            )}
        </div>
    );
};

export default List;