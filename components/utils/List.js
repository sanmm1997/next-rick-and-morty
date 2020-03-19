export default (props) => {
    const { items, render, colSm, colMd, textAlign } = props;
    const classes = `col-sm-${colSm || 12} col-md-${colMd || 6} text-${textAlign || 'center'} mt-4 `;

    return (
        items.map(item => (
            <article key={item.id} className={classes}>
                {render(item)}
            </article>
        ))
    );
}