from fastapi import FastAPI, HTTPException
from starlette.middleware.cors import CORSMiddleware
from dbdata.getInfo import get_main_data

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешает все источники
    allow_credentials=True,
    allow_methods=["*"],  # Разрешает все методы
    allow_headers=["*"],  # Разрешает все заголовки
)


@app.get("/")
async def root():
    try:
        main_data = await get_main_data()
        return {"data": main_data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
