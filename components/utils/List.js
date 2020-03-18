export default (props) => {
    const { items, colSm, colMd, textAlign, render } = props;
    const classes = `col-sm-${colSm || 12} col-md-${colMd || 6} text-${textAlign || 'center'} mt-4`;

    return (
        items.map(item => (
            <article
                key={item.id}
                className={classes}
            >
                { render(item) }
            </article>
        ))
    );
}