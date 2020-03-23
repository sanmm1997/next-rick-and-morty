export default (props) => {
    const { items, render, colSm, colMd, textAlign, className } = props;
    const classes = `col-sm-${colSm || 12} col-md-${colMd || 6} text-${textAlign || 'center'} mt-3 ${className} `;

    return (
        items.map(item => (
            <article key={item.id} className={classes}>
                {render(item)}
            </article>
        ))
    );
}