import pandas
import pyautogui as gui
import time


def dataRegister():
    table = pandas.read_csv('./assets/produtos.csv')

    for line in table.index:
        gui.click(x=498, y=279)

        _code = table.loc[line, 'codigo']
        _brand = table.loc[line, 'marca']
        _type = table.loc[line, 'tipo']
        _category = table.loc[line, 'categoria']
        _price = table.loc[line, 'preco_unitario']
        _cost = table.loc[line, 'custo']
        _obs = table.loc[line, 'obs']
    
        gui.write(str(_code))
        gui.press('tab')
        gui.write(str(_brand))
        gui.press('tab')
        gui.write(str(_type))
        gui.press('tab')
        gui.write(str(_category))
        gui.press('tab')
        gui.write(str(_price))
        gui.press('tab')
        gui.write(str(_cost))
        gui.press('tab')

        if not pandas.isna(_obs):
            gui.write(str(_obs))


        time.sleep(0.5)
        gui.press('tab')
        gui.press('enter')
       
        gui.scroll(900)
    
  
