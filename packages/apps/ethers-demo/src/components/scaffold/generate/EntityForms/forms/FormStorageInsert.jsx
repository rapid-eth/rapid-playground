export default props =>
props.sanitized && props.data
? <CMS.StorageInsert
    address={props.address}
    space={props.space}
    access={props.access}
    index={props.index}
    delta={props.delta}
    data={props.data}
  />
: null