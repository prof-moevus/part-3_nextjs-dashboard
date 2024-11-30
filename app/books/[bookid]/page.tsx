/**
 * This is an example of dynamic routing 
 * with a server-side component
 */
export default async function BookPage(
    {params,} : { params: Promise<{ bookid: string }>}
) 
    {

    const bookID = Number((await params).bookid)

    if (bookID > 100) {
        return (
            <p>Error</p>
        )
    }

    return (
    <>
        <h3>Livre {bookID} </h3>
        <p>Path:</p>
    </>
)
}
