function union(data) {
          data =  data.map(el=>{
            if(global.union.find(e => e.code == el.tr_par1_id)){

                return {
                    origin: el.tr_par1_id,
                    description: global.union.find(e => e.code == el.tr_par1_id).name,
                    table: el.tr_table
                }
            }

        });
        return data
}

module.exports = union;