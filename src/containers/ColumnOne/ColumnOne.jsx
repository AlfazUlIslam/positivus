const ColumnOne = (props) => {
    const { styles, children } = props
        
    return (
        // Column one
        <div className={`${styles}`}>
            {children}
        </div>
    )
}
export default ColumnOne