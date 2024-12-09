const ColumnTwo = (props) => {
    const { styles, children } = props
        
    return (
        // Column two
        <div className={`${styles}`}>
            {children}
        </div>
    )
}
export default ColumnTwo