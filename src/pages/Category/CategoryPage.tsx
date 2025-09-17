import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { CategoryPageData } from './types/CategoryPageData.ts';
import type { CategoryInfo } from '../HomePage/types/CategoryInfo.ts';
import type { FilterBrand, FilterGroup, FilterVariant } from './types/FilterInfo.ts';

export const CategoryPage = () => {
  const { slug } = useParams();
  const [data, setData] = useState<CategoryPageData>();

  useEffect(() => {
    fetch(`https://rozetochka-api.azurewebsites.net/api/category/${slug}`)
      .then((r) => r.json())
      .then(setData);
  }, [slug]);

  return !data ? (
    <></>
  ) : (
    <>
      <h1>{data.title}</h1>
      <div className="row">
        {data.subCategories.map((category: CategoryInfo) => (
          <div key={category.id} className="col-1">
            <Link to={category.href}>
              <img src={category?.imageUrl} alt="" />
              <p className="text-center">{category.title}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-3">
          <p>Найдено {data.total} товара</p>
          <div className="col-12 my-3">
            <div>Бренд {data.filters.brands.length}</div>
            {data.filters.brands.map((brand: FilterBrand) => (
              <div className="d-flex">
                <label>
                  <input type="checkbox" />
                  {brand.title} {brand.count}
                </label>
              </div>
            ))}
          </div>
          {data.filters.groups.map((group: FilterGroup) => (
            <div className="col-12 my-3">
              <div>
                {group.title} {group.variants.length}
              </div>
              {group.variants.map((variant: FilterVariant) => (
                <div className="d-flex">
                  <label>
                    <input type="checkbox" />
                    {variant.title} {variant.count}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="col-9">{}</div>
      </div>
    </>
  );
};
