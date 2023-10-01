
export default function Table () {
    return(
        <div class="container_table">
            <table border="1">
                <tr>
                    <th>Código do produto</th>
                    <th>Marca do produto</th>
                    <th>Tipo do produto</th>
                    <th>Categoria do produto</th>
                    <th>Preço unitário do produto</th>
                    <th>Custo do produto</th>
                    <th>OBS</th>
                </tr>
                <tr id="data_table">
                    <td class="t_code">Dado 1</td>
                    <td class="t_brand">Dado 2</td>
                    <td class="t_type">Dado 3</td>
                    <td class="t_category">Dado 4</td>
                    <td class="t_unit_price">Dado 5</td>
                    <td class="t_price">Dado 6</td>
                    <td class="t_obs">Dado 7</td>
                </tr>
            </table>
        </div>
    )
}