const Row = (props) => {
    const { styles, children } = props
        
    return (
        <div className={`${styles}`}>
            {children}
        </div>
    )
}
export default Row